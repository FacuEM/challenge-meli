import { makeStyles } from "@material-ui/core/styles";

export const ToolStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    margin: '10px auto 10px'
  },
  details: {
    display: "flex",
    flexDirection: "column",
  },
  content: {
    flex: "1 0 auto",
  },
  cover: {
    width: "35%",
  },
  table: {
    minWidth: 650,
  },
  thead: {
    backgroundColor: "rgb(32,35,42)",
  },
  letters: {
    color: "white",
  },
  button: {
    margin: theme.spacing(1),
  },
  linkDeco: {
    textDecoration: "none",
  },
}));

export const MainStyles = makeStyles({
  root: {
    minWidth: 250,
    minHeight: 200,
    margin: "auto 10px auto 10px",
  },
  linkDeco: {
    textDecoration: "none",
  },
});
