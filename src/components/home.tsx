import styled from "@emotion/styled";

const Typography = styled.span`
  color: #101010;
  font-size: 1.5rem;
  font-weight: 600;
  text-align: center;
`;

export default function Home() {
  return (
    <div className="my-5">
      <div className="text-center">
        <Typography>Hello, I'm Salma Gira.</Typography>
        <br />
        <Typography>I'm a Fullstack Engineer.</Typography>
      </div>
    </div>
  );
}
