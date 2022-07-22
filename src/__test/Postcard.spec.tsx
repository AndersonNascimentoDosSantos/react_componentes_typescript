import { render, fireEvent, screen } from "@testing-library/react";
import PostCard from "../components/PostCard";

test("loads items eventually", async () => {
  render(
    <PostCard
      href={""}
      title={""}
      subtitle={""}
      date={""}
      imageSrc={""}
      authorName={""}
      cod={0}
    />
  );

  // Click button
  fireEvent.click(screen.getByTestId("link"));

  // Wait for page to update with query text
  const image = await screen.findByTestId("image");
  expect(image).toHaveLength(1);
  // Wait for page to update with query text
  const title = await screen.findByTestId("title");
  expect(title).toHaveLength(1);
  // Wait for page to update with query text
  const subtitle = await screen.findByTestId("subtitle");
  expect(subtitle).toHaveLength(1);
  // Wait for page to update with query text
  const date = await screen.findByTestId("date");
  expect(date).toHaveLength(1);
});
