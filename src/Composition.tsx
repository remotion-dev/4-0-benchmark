import {AbsoluteFill, OffthreadVideo, staticFile} from 'remotion';

export const MyComposition = () => {
	return (
		<AbsoluteFill>
			<OffthreadVideo src={staticFile('4k.mp4')} />
		</AbsoluteFill>
	);
};
