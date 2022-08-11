import { useWindowScrollPosition } from "../../../../packages/rooks/src/hooks/useWindowScrollPosition";
import { useDocumentEventListener } from "../../../../packages/rooks/src/hooks/useDocumentEventListener";
import { useOnWindowScroll } from "../../../../packages/rooks/src/hooks/useOnWindowScroll";
import { useOnWindowResize } from "../../../../packages/rooks/src/hooks/useOnWindowResize";
import { useWindowEventListener } from "../../../../packages/rooks/src/hooks/useWindowEventListener";
export default function Test() {
  useDocumentEventListener("click", () => {
    console.log("hi from documnt on click");
  });
  useWindowEventListener("click", () => {
    console.log("hi werbdws on click");
  });

  useOnWindowScroll(() => {
    console.log("hi from scroll");
  });
  useOnWindowResize(
    () => {
      console.log("resize adsf");
    },
    true,
    true
  );

  const { scrollX, scrollY } = useWindowScrollPosition();
  // useOnWindowScroll(
  //   () => {
  console.log(scrollX, scrollY, "hi from sc pos");
  //   },
  //   true,
  //   true
  // );
  return (
    <div style={{ padding: "100vh", height: "100vh", backgroundColor: "red" }}>
      asdf
    </div>
  );
}
