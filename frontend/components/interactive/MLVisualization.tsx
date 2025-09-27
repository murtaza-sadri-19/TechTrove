'use client';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface BinaryParticle {
  id: number;
  x: number;
  y: number;
  value: '0' | '1';
  opacity: number;
  size: number;
  speed: number;
}

export function MLVisualization() {
  const [particles, setParticles] = useState<BinaryParticle[]>([]);
  const [neuralNodes, setNeuralNodes] = useState<Array<{id: number; x: number; y: number; active: boolean}>>([]);

  // Initialize neural network nodes
  useEffect(() => {
    const nodes = [];
    // Input layer (4 nodes)
    for (let i = 0; i < 4; i++) {
      nodes.push({ id: i, x: 50, y: 50 + i * 60, active: false });
    }
    // Hidden layer (6 nodes)
    for (let i = 0; i < 6; i++) {
      nodes.push({ id: i + 4, x: 200, y: 30 + i * 50, active: false });
    }
    // Output layer (3 nodes)
    for (let i = 0; i < 3; i++) {
      nodes.push({ id: i + 10, x: 350, y: 70 + i * 80, active: false });
    }
    setNeuralNodes(nodes);
  }, []);

  // Create flowing binary particles
  useEffect(() => {
    const interval = setInterval(() => {
      setParticles(prev => {
        // Remove old particles
        const filtered = prev.filter(p => p.x < 400 && p.opacity > 0);
        
        // Add new particles
        const newParticles: BinaryParticle[] = [];
        for (let i = 0; i < 3; i++) {
          newParticles.push({
            id: Date.now() + i,
            x: -20,
            y: Math.random() * 300 + 50,
            value: Math.random() > 0.5 ? '1' : '0',
            opacity: 1,
            size: Math.random() * 0.5 + 0.8,
            speed: Math.random() * 2 + 1
          });
        }
        
        // Update existing particles
        const updated = [...filtered, ...newParticles].map(p => ({
          ...p,
          x: p.x + p.speed,
          opacity: p.x > 300 ? p.opacity - 0.02 : p.opacity
        }));
        
        return updated;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  // Animate neural network activation
  useEffect(() => {
    const interval = setInterval(() => {
      setNeuralNodes(prev => 
        prev.map(node => ({
          ...node,
          active: Math.random() > 0.7
        }))
      );
    }, 800);

    return () => clearInterval(interval);
  }, []);

  // Binary matrix pattern
  const [matrix, setMatrix] = useState<string[][]>([]);
  
  useEffect(() => {
    const generateMatrix = () => {
      const newMatrix = [];
      for (let i = 0; i < 15; i++) {
        const row = [];
        for (let j = 0; j < 25; j++) {
          row.push(Math.random() > 0.5 ? '1' : '0');
        }
        newMatrix.push(row);
      }
      setMatrix(newMatrix);
    };

    generateMatrix();
    const interval = setInterval(generateMatrix, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-full h-96 bg-gradient-to-br from-secondary-900 via-secondary-800 to-primary-900 dark:from-secondary-950 dark:via-secondary-900 dark:to-primary-950 rounded-2xl overflow-hidden">
      {/* Background Binary Matrix */}
      <div className="absolute inset-0 opacity-10">
        {matrix.map((row, i) => (
          <div key={i} className="flex text-xs font-mono text-primary-400">
            {row.map((cell, j) => (
              <motion.span
                key={`${i}-${j}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: (i + j) * 0.01 }}
                className="w-4"
              >
                {cell}
              </motion.span>
            ))}
          </div>
        ))}
      </div>

      {/* Flowing Binary Particles */}
      <div className="absolute inset-0">
        <AnimatePresence>
          {particles.map(particle => (
            <motion.div
              key={particle.id}
              initial={{ opacity: 0, scale: 0 }}
              animate={{ 
                opacity: particle.opacity,
                scale: particle.size,
                x: particle.x,
                y: particle.y
              }}
              exit={{ opacity: 0, scale: 0 }}
              className="absolute text-primary-300 font-mono font-bold text-lg"
            >
              {particle.value}
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      {/* Neural Network Visualization */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 300">
        {/* Connections */}
        <g opacity="0.3">
          {/* Input to Hidden */}
          {[0,1,2,3].map(i =>
            [4,5,6,7,8,9].map(j => (
              <motion.line
                key={`${i}-${j}`}
                x1={neuralNodes[i]?.x + 10}
                y1={neuralNodes[i]?.y + 10}
                x2={neuralNodes[j]?.x}
                y2={neuralNodes[j]?.y + 10}
                stroke="rgba(59, 130, 246, 0.4)"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 0.5 }}
              />
            ))
          )}
          {/* Hidden to Output */}
          {[4,5,6,7,8,9].map(i =>
            [10,11,12].map(j => (
              <motion.line
                key={`${i}-${j}`}
                x1={neuralNodes[i]?.x + 10}
                y1={neuralNodes[i]?.y + 10}
                x2={neuralNodes[j]?.x}
                y2={neuralNodes[j]?.y + 10}
                stroke="rgba(59, 130, 246, 0.4)"
                strokeWidth="1"
                initial={{ pathLength: 0 }}
                animate={{ pathLength: 1 }}
                transition={{ duration: 2, delay: 1 }}
              />
            ))
          )}
        </g>

        {/* Neural Nodes */}
        {neuralNodes.map(node => (
          <g key={node.id}>
            <motion.circle
              cx={node.x + 10}
              cy={node.y + 10}
              r="12"
              fill={node.active ? "#3B82F6" : "#1F2937"}
              stroke="#60A5FA"
              strokeWidth="2"
              animate={{
                fill: node.active ? "#3B82F6" : "#1F2937",
                r: node.active ? 14 : 12,
              }}
              transition={{ duration: 0.3 }}
            />
            <text
              x={node.x + 10}
              y={node.y + 15}
              textAnchor="middle"
              className="text-xs font-mono fill-white"
            >
              {Math.random() > 0.5 ? '1' : '0'}
            </text>
          </g>
        ))}
      </svg>

      {/* ML Labels */}
      <div className="absolute bottom-4 left-4 text-primary-300 font-mono text-sm">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          Neural Network Training...
        </motion.div>
      </div>

      <div className="absolute top-4 right-4 text-primary-300 font-mono text-xs">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
        >
          Accuracy: {Math.floor(Math.random() * 5 + 95)}%
        </motion.div>
      </div>

      {/* Pulsing ML Algorithm Indicator */}
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="text-center text-primary-200">
          <div className="text-lg font-bold font-mono">ML</div>
          <div className="text-xs">ALGORITHM</div>
        </div>
      </motion.div>
    </div>
  );
}