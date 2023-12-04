interface ChuckJokeProps {
  Jokes: {
    id: number;
    joke: string;
  }[];
}

const ChuckJoke: React.FC<ChuckJokeProps> = ({ Jokes }) => {
  return (
    <ul>
      {Jokes.map((joke) => (
        <p key={joke.id}>{joke.joke}</p>
      ))}
    </ul>
  );
};

export default ChuckJoke;
