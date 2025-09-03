import React from 'react';

interface ImageHeaderProps {
  title: string;
  backgroundImage: string;
}

const ImageHeader: React.FC<ImageHeaderProps> = ({ title, backgroundImage }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '320px',
        display: 'flex',
        alignItems: 'center',
        position: 'relative',
      }}
    >
                    <div className='absolute inset-0 bg-black opacity-10' />

      <div className='relative w-full'>
        <div className='text-center lg:text-left lg:pl-20 w-full h-full'>
          <h1 className='text-white text-3xl lg:text-4xl font-bold'>{title}</h1>
        </div>
      </div>

    </div>
  );
};

export default ImageHeader;