import styled from "@emotion/styled";
import { useMemo } from "react";

const Snowflake = styled.div`
  position: absolute;
  top: -10px;
  background: radial-gradient(
    circle,
    rgba(255, 255, 255, 0.9) 0%,
    rgba(255, 255, 255, 0.5) 70%,
    rgba(255, 255, 255, 0) 100%
  );
  border-radius: 50%;
  pointer-events: none;
  animation: fall linear infinite;

  @keyframes fall {
    to {
      transform: translateY(100vh);
    }
  }
`;

const SnowfallContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  overflow: hidden;
  // background: linear-gradient(to bottom, #0fa5fc, #36508a);
  background: linear-gradient(to bottom, #36508a, #0fa5fc);
`;

const generateSnowflakes = (count: number) => {
  const snowflakes = [];
  for (let i = 0; i < count; i++) {
    const size = Math.random() * 10 + 5;
    const left = Math.random() * 100;
    const duration = Math.random() * 5 + 5;
    const delay = Math.random() * 5;
    const opacity = Math.random() * 0.5 + 0.5;

    snowflakes.push(
      <Snowflake
        key={i}
        style={{
          width: size,
          height: size,
          left: `${left}%`,
          animationDuration: `${duration}s`,
          animationDelay: `${delay}s`,
          opacity: opacity,
        }}
      />
    );
  }
  return snowflakes;
};

const Snowfall = ({ count }: { count: number }) => {
  const snowflakes = useMemo(() => generateSnowflakes(count), [count]);
  return <SnowfallContainer>{snowflakes}</SnowfallContainer>;
};

export default Snowfall;
