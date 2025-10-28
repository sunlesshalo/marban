import React, { useRef, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';

const ParticleBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const { theme } = useTheme();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let nodes: ParticleNode[] = [];
        let pulses: Pulse[] = [];

        const colors = {
            node: theme === 'dark' ? 'rgba(169, 169, 169, 0.5)' : 'rgba(55, 65, 81, 0.5)',
            active: '#B91C1C',
            line: theme === 'dark' ? 'rgba(169, 169, 169, 0.08)' : 'rgba(55, 65, 81, 0.1)',
            pulse: 'rgba(185, 28, 28, 1)'
        };

        const setCanvasSize = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        setCanvasSize();

        const mouse = {
            x: -1000,
            y: -1000,
            radius: 150 // Increased interaction radius
        };

        const handleMouseMove = (event: MouseEvent) => {
            const rect = canvas.getBoundingClientRect();
            mouse.x = event.clientX - rect.left;
            mouse.y = event.clientY - rect.top;
        };

        const handleMouseOut = () => {
            mouse.x = -1000;
            mouse.y = -1000;
        };

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('mouseout', handleMouseOut);

        class ParticleNode {
            x: number;
            y: number;
            radius: number;
            baseRadius: number;
            neighbors: ParticleNode[];
            color: string;
            isActive: boolean;
            activationTime: number;

            constructor(x: number, y: number) {
                this.x = x;
                this.y = y;
                this.baseRadius = Math.random() * 2 + 4; // Larger nodes
                this.radius = this.baseRadius;
                this.neighbors = [];
                this.color = colors.node;
                this.isActive = false;
                this.activationTime = 0;
            }

            draw() {
                ctx!.beginPath();
                ctx!.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
                ctx!.fillStyle = this.color;
                ctx!.fill();
            }
            
            update() {
                // Passive breathing effect
                if (!this.isActive) {
                    this.radius = this.baseRadius + Math.sin(Date.now() * 0.001 + this.x) * 0.5;
                }

                const dx = mouse.x - this.x;
                const dy = mouse.y - this.y;
                const distance = Math.sqrt(dx * dx + dy * dy);

                if (distance < mouse.radius && !this.isActive) {
                    this.activate();
                    this.firePulse();
                }

                if (this.isActive) {
                    const elapsed = Date.now() - this.activationTime;
                    const duration = 1200; // Slightly longer glow
                    if (elapsed < duration) {
                        const progress = elapsed / duration;
                        this.radius = this.baseRadius + 5 * Math.sin(Math.PI * progress); // More pronounced pop
                        this.color = `rgba(185, 28, 28, ${1 - progress})`;
                    } else {
                        this.isActive = false;
                        this.color = colors.node;
                    }
                }
                this.draw();
            }

            activate() {
                if (!this.isActive) {
                    this.isActive = true;
                    this.activationTime = Date.now();
                }
            }
            
            firePulse() {
                if (this.neighbors.length > 0) {
                    const target = this.neighbors[Math.floor(Math.random() * this.neighbors.length)];
                    pulses.push(new Pulse(this, target));
                }
            }
        }

        class Pulse {
            source: ParticleNode;
            target: ParticleNode;
            progress: number;
            speed: number;
            radius: number;
            color: string;

            constructor(source: ParticleNode, target: ParticleNode) {
                this.source = source;
                this.target = target;
                this.progress = 0;
                this.speed = Math.random() * 0.01 + 0.015; // Faster pulses
                this.radius = 4; // Larger pulses
                this.color = colors.pulse;
            }

            update() {
                this.progress += this.speed;
                if (this.progress >= 1) {
                    this.target.activate(); // Trigger flash on arrival
                    this.progress = 1; // Mark for removal
                }
            }

            draw() {
                const x = this.source.x + (this.target.x - this.source.x) * this.progress;
                const y = this.source.y + (this.target.y - this.source.y) * this.progress;

                ctx!.beginPath();
                ctx!.arc(x, y, this.radius, 0, Math.PI * 2);
                ctx!.fillStyle = this.color;
                ctx!.shadowColor = colors.active;
                ctx!.shadowBlur = 15; // More intense glow
                ctx!.fill();
                ctx!.shadowBlur = 0;
            }
        }

        function init() {
            nodes = [];
            pulses = [];
            const density = window.innerWidth < 768 ? 120 : 150; // Denser on mobile
            const connectionRadius = 220;

            for (let x = 0; x < canvas.width; x += density) {
                for (let y = 0; y < canvas.height; y += density) {
                    const posX = x + Math.random() * density;
                    const posY = y + Math.random() * density;
                    nodes.push(new ParticleNode(posX, posY));
                }
            }
            
            for (let i = 0; i < nodes.length; i++) {
                for (let j = i; j < nodes.length; j++) {
                    const dx = nodes[i].x - nodes[j].x;
                    const dy = nodes[i].y - nodes[j].y;
                    const distance = Math.sqrt(dx * dx + dy * dy);
                    if (distance < connectionRadius) {
                        nodes[i].neighbors.push(nodes[j]);
                        nodes[j].neighbors.push(nodes[i]);
                    }
                }
            }
        }

        function animate() {
            ctx!.clearRect(0, 0, canvas.width, canvas.height);

            // Draw synapses
            nodes.forEach(node => {
                node.neighbors.forEach(neighbor => {
                    ctx!.beginPath();
                    ctx!.moveTo(node.x, node.y);
                    ctx!.lineTo(neighbor.x, neighbor.y);
                    ctx!.strokeStyle = colors.line;
                    ctx!.stroke();
                });
            });

            // Update and draw nodes
            nodes.forEach(node => node.update());

            // Update and draw pulses
            pulses = pulses.filter(pulse => pulse.progress < 1);
            pulses.forEach(pulse => {
                pulse.update();
                pulse.draw();
            });

            // Randomly fire new pulses for ambient activity
            if (Math.random() < 0.1 && nodes.length > 0) { // Increased firing rate
                 const randomNode = nodes[Math.floor(Math.random() * nodes.length)];
                 randomNode.firePulse();
            }

            animationFrameId = requestAnimationFrame(animate);
        }

        const handleResize = () => {
            setCanvasSize();
            init();
        };

        window.addEventListener('resize', handleResize);
        
        init();
        animate();

        return () => {
            window.removeEventListener('resize', handleResize);
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('mouseout', handleMouseOut);
            cancelAnimationFrame(animationFrameId);
        };
    }, [theme]);

    return <canvas ref={canvasRef} className="absolute inset-0 z-[15]" />;
};

export default ParticleBackground;