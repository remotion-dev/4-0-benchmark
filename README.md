# Remotion OffthreadVideo performance comparison

This repo is for demonstrating and backing up the claim that the `<OffthreadVideo>` component has become twice as fast in Remotion 4.0.

Test conditions:

- Macbook Air 2022 M2
- 4x concurrency
- Only the "Rendering frames" phase is measured, as it is the only stage where `<OffthreadVideo>` can help.
- A 4K video is being re-encoded to make the work by `<OffthreadVideo>` the most intensive part.

## Results

With `4.0.0-alpha18`:

`npx remotion render`

- Rendered frames (4x) 74957ms

With packages updated to `3.3.101` and after running `npm i`:

`npx remotion render --config=remotion-v3.config.ts`

- Rendered frames (4x) 286116ms

Making Remotion 4.0's `<OffthreadVideo>` component 281% faster than Remotion 3.3, exceeding our conservative claim of 100% speed improvement significantly.

## Credit

Video from https://www.pexels.com/video/waves-rushing-and-splashing-to-the-shore-1409899/
