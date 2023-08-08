import { ColourTheme } from "./theme";
import "styled-components";
declare module "styled-components" {
  export interface DefaultTheme extends ColourTheme {}
}
