import Image from 'next/image';
import React from 'react';

interface ImageProps {
    className?: string;
}

const SinusoidLogo: React.FC<ImageProps> = ({ className }) => {
    return (
      <div className={className}>
        <img
          src="https://api.sinusoid.in/sinulogo"
          alt={"sinuLogo"}
        />
      </div>
    );
};

export default SinusoidLogo;