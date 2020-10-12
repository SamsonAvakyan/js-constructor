import image from "./assets/javascript.jpg";
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
      "text-align": "center",
      padding: "1rem"
    }
  }),

  new ImageBlock(image, {
    styles: {
      padding: "1rem 0",
      display: "flex",
      "justify-content": "center"
    },
    imageStyles: {
      width: "50%",
      height: "auto"
    },
    alt: "Это картинка"
  }),
  new TextBlock(
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eveniet, tenetur.",
    {
      styles: {
        "font-weight": "Bold",
        color: "gold",
        "text-transform": "uppercase",
        "text-align": "center"
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
        "text-align": "center"
      }
    }
  )
];
