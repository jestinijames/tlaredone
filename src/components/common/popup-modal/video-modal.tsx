import React from 'react';
import ModalVideo from 'react-modal-video';

interface VideoModalProps {
  isVideoOpen: boolean;
  setIsVideoOpen: React.Dispatch<React.SetStateAction<boolean>>;
  videoId?: string;
}

const VideoModal: React.FC<VideoModalProps> = ({
  isVideoOpen,
  setIsVideoOpen,
  videoId = '9Y7ma241N8k',
}) => {
  return (
    <ModalVideo
      channel='youtube'
      isOpen={isVideoOpen}
      videoId={videoId}
      onClose={() => setIsVideoOpen(false)}
    />
  );
};

export default VideoModal;
