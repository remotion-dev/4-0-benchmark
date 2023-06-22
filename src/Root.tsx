import {Composition} from 'remotion';
import {MyComposition} from './Composition';

export const RemotionRoot: React.FC = () => {
	return (
		<>
			<Composition
				id="MyComp"
				component={MyComposition}
				durationInFrames={21 * 30}
				fps={30}
				width={1920 * 2}
				height={1080 * 2}
			/>
		</>
	);
};
