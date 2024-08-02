import Image from 'next/image';
import React from 'react';

interface ImageProps {
    className?: string;
}

const SinusoidLogo: React.FC<ImageProps> = ({ className }) => {
    return (
      <div className={className}>
        <Image
          src="https://api.sinusoid.in/sinulogo"
          alt={"sinuLogo"}
          width={"100"}
          height={"100"}
        />
      </div>
    );
};

export default SinusoidLogo;