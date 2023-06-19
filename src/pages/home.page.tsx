import { SessionTitle } from "../app/components/SessionTitle";

export const HomePage = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        flex: 1,
      }}
    >
      <SessionTitle titleComponent={<div style={{ height: 14 }} />} />
      <span style={{fontWeight: "300", marginTop: 16}}>Please chooise a product from left.</span>
    </div>
  );
};
