import { Text } from './Text';

export const Main = () => {
  return (
    <main className="flex items-center w-full pt-60 justify-center text-center">
      <div className="max-w-3xl flex flex-col items-center">
        <h1 className="text-5xl font-black mb-4">
          A collection of{' '}
          <span className="text-transparent inline-block bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
            open source
          </span>{' '}
          tools designed for developers.
        </h1>

        <div className='max-w-xl'>
          <Text>
            We basically build a bunch of open source tools for developers.
            Frontend tools is what we mainly focus on.
          </Text>
        </div>
      </div>
    </main>
  );
};
