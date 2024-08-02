import React from 'react';

interface ImageProps {
    className?: string;
}

const SinusoidLogo: React.FC<ImageProps> = ({ className }) => {
    return (
      <div className={className}>
        <img src="/SinuLogo.webp" alt={"sinuLogo"} />
      </div>
    );
};

export default SinusoidLogo;