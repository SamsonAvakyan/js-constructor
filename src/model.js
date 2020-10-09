import image from "./assets/image.png";
import {
  ImageBlock,
  TitleBlock,
  TextBlock,
  ColumnsBlock
} from "./classes/blocks";

export const model = [
  new TitleBlock("Конструктор сайтов на чистом Javascript", {
    tag: "h2",
    styles: {
      background: "linear-gradient(to right, #ff0099, #493240)",
      color: "#green",
      "text-align": "center",
      padding: "1.5rem"
    }
  }),

  new ImageBlock(image, {
    styles: {
      padding: "2rem 0",
      display: "flex",
      "justify-content": "center"
    },
    imageStyles: {
      width: "500px",
      height: "auto"
    },
    alt: "Это картинка"
  }),
  new TextBlock(
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, tenetur.",
    {
      styles: {
        color: "gold",
        "text-transform": "uppercase"
      }
    }
  ),
  new ColumnsBlock(
    [
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus praesentium delectus quos maxime voluptatibus magni quas quia earum quisquam, velit id repudiandae ad, voluptatum in accusantium sit vitae quidem inventore!",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus praesentium delectus quos maxime voluptatibus magni quas quia earum quisquam, velit id repudiandae ad, voluptatum in accusantium sit vitae quidem inventore!",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus praesentium delectus quos maxime voluptatibus magni quas quia earum quisquam, velit id repudiandae ad, voluptatum in accusantium sit vitae quidem inventore!"
    ],
    {
      styles: {
        color: "pink",
        border: "1px solid pink",
        margin: "1rem"
      }
    }
  )
];
