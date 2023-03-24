import autoStop from "../../images/autoStop.png";
import bulkTech from '../../images/bulktech.webp'
import youtube from '../../images/youtube.webp'

const projects = [
  {
    title: "AutoStop Web",
    url: "http://auto-stop-web.herokuapp.com/",
    body: "Sitio Web desarrollado con Django, Firebase, Bootstrap, entre otras tecnologías.",
    image: autoStop,
  },
  {
    title: "BulkTech Website",
    url: "https://www.bulktech.cl/",
    body: "Sitio web empresa BulkTech, incluye blog renderizado con markdown, desarrollada con NextJS.",
    image: bulkTech,
  },
  {
    title: "YouTube",
    url: "https://www.youtube.com/channel/UCWqprEPWELc2uGxsOvm8EZQ",
    body: "Canal de Youtube donde enseño sobre diferentes tecnologías.",
    image: youtube,
  },
];

export default projects;
