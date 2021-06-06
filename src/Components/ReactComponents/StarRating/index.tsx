import React from "react";
import { useState } from "react";
import styles from "./index.less";
import { LinkedList } from "../../JS/DataStructure/LinkNode";

interface StarProps {
  marked: boolean;
  starId: number;
}

const Star = (props: StarProps) => {
  const { marked, starId } = props;
  return (
    <span data-star-id={starId} className={styles.star} role="button">
      {marked ? "\u2605" : "\u2606"}
    </span>
  );
};

const StarRating = (props: any) => {
  const { value } = props;
  const [rating, setRating] = useState(parseInt(value) || 0);
  const [selection, setSelection] = useState(0);
  const hoverOver = (event: any) => {
    let val = 0;
    if (event && event.target && event.target.getAttribute("data-star-id")) {
      val = event.target.getAttribute("data-star-id");
    }
    setSelection(val);
  };
  const link = new LinkedList();

  link.append("a");
  link.append("b");
  link.append("c");
  link.append("d");
  link.append("e");
  link.append("f");
  link.append("g");

  const reverse = (head: any): any => {
    // let head: any;
    // if (link && link.getHead) {
    //   head = link.getHead();
    // }
    console.log("link:reverse", link, head);

    if (!head || head.next == null) return head;
    const last = head ? reverse(head.next) : null;
    head.next.next = head;
    head.next = null;
    console.log("last:", last);

    return last;
  };

  console.log("link", link, link.toString());

  console.log("result-reverse", reverse(link.getHead()));
  return (
    <div
      onMouseOut={() => hoverOver(null)}
      onClick={(e: any) =>
        setRating(e.target.getAttribute("data-star-id") || rating)
      }
      onMouseOver={(e) => hoverOver(e)}
    >
      {Array.from({ length: 5 }, (v, i) => (
        <Star
          starId={i + 1}
          key={`star_${i + 1}`}
          marked={selection ? selection >= i + 1 : rating >= i + 1}
        ></Star>
      ))}
    </div>
  );
};

export default StarRating;
