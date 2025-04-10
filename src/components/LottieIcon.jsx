// src/components/LottieIcon.jsx
import React, { useRef, useEffect } from 'react';

const LottieIcon = () => {
    const lottieRef = useRef(null);

    useEffect(() => {
        const lottie = lottieRef.current;

        if (!lottie) return;

        const play = () => lottie.play();
        const stop = () => lottie.stop();

        lottie.addEventListener('mouseenter', play);
        lottie.addEventListener('mouseleave', stop);

        return () => {
            lottie.removeEventListener('mouseenter', play);
            lottie.removeEventListener('mouseleave', stop);
        };
    }, []);

    return (
        <dotlottie-player
            ref={lottieRef}
            src="https://lottie.host/5e53af12-2a23-44eb-ad18-6d40fb332dd2/oENL5m13wI.lottie"
            background="transparent"
            speed="1"
            style={{ width: '65px', height: '65px' }}
            loop={false}
            autoplay={false}
        ></dotlottie-player>
    );
};

export default LottieIcon;