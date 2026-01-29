import ftc14mmLong from "@/assets/products/caps-closures/14mm-long-ftc.jpg";
import ftc14mmShort from "@/assets/products/caps-closures/14mm-short-ftc.jpg";
import ftc15mm from "@/assets/products/caps-closures/15mm-ftc.jpg";
import ftc15mmSquare from "@/assets/products/caps-closures/15mm-square-ftc.jpg";
import ftc15mmOval from "@/assets/products/caps-closures/15mm-oval-ftc.jpg";
import ftc15mmSsft from "@/assets/products/caps-closures/15mm-ssft.jpg";
import ftc17mm from "@/assets/products/caps-closures/17mm-ftc.jpg";
import ftc19mmLongBek from "@/assets/products/caps-closures/19mm-long-bek-ftc.jpg";
import ftc19mmLong from "@/assets/products/caps-closures/19mm-long-ftc.jpg";
import ftc19mmShortBek from "@/assets/products/caps-closures/19mm-short-bek-ftc.jpg";
import ftc19mmShortDiamond from "@/assets/products/caps-closures/19mm-short-diamond-ftc.jpg";
import ftc19mmShortWoPlug from "@/assets/products/caps-closures/19mm-short-ftc-wo-plug.jpg";
import ftc19mmShort from "@/assets/products/caps-closures/19mm-short-ftc.jpg";
import ftc19mmShortKettle from "@/assets/products/caps-closures/19mm-short-kettle-ftc.jpg";
import ftc19mmShortTShape from "@/assets/products/caps-closures/19mm-short-t-shape-ftc.jpg";
import ftc19mmXs from "@/assets/products/caps-closures/19mm-xs-ftc.jpg";
import ftc22mmOval from "@/assets/products/caps-closures/22mm-oval-ftc.jpg";
import ftc22mmSsft from "@/assets/products/caps-closures/22mm-ssft.jpg";
import ftc24mmWoPlug from "@/assets/products/caps-closures/24mm-ftc-wo-plug.jpg";
import ftc24mm from "@/assets/products/caps-closures/24mm-ftc.jpg";
import ftc24mmLongBek from "@/assets/products/caps-closures/24mm-long-bek-ftc.jpg";
import ftc24mmLong from "@/assets/products/caps-closures/24mm-long-ftc.jpg";
import ftc24mmLongPresstop from "@/assets/products/caps-closures/24mm-long-presstop.jpg";
import ftc24mmShortBek from "@/assets/products/caps-closures/24mm-short-bek-ftc.jpg";
import ftc25mmNew from "@/assets/products/caps-closures/25mm-new-ftc.jpg";
import ftc25mmBek from "@/assets/products/caps-closures/25mm-bek-ftc.jpg";
import ftc25mmKettle from "@/assets/products/caps-closures/25mm-kettle-ftc.jpg";
import ftc25mmMushroom from "@/assets/products/caps-closures/25mm-mushroom-ftc.jpg";
import ftc25mmOval from "@/assets/products/caps-closures/25mm-oval-ftc.jpg";
import ftc25mmSsft from "@/assets/products/caps-closures/25mm-ssft.jpg";
import ftc28mmBek from "@/assets/products/caps-closures/28mm-bek-ftc.jpg";
import ftc28mmDiamond from "@/assets/products/caps-closures/28mm-diamond-ftc.jpg";
import ftc28mm from "@/assets/products/caps-closures/28mm-ftc.jpg";
import ftc28mmKettle from "@/assets/products/caps-closures/28mm-kettle-ftc.jpg";
import ftc28mmNew from "@/assets/products/caps-closures/28mm-new-ftc.jpg";
import ftc28mmPresstop from "@/assets/products/caps-closures/28mm-presstop.jpg";
import ftc28mmTShape from "@/assets/products/caps-closures/28mm-t-shape-ftc.jpg";
import ftc32mmKetchup from "@/assets/products/caps-closures/32mm-ketchup-ftc.jpg";
import ftc38mmChDouble from "@/assets/products/caps-closures/38mm-ch-double-ftc.jpg";
import ftc38mmCrc from "@/assets/products/caps-closures/38mm-crc.jpg";
import ftc38mmDouble from "@/assets/products/caps-closures/38mm-double-ftc.jpg";
import ftc38mmHerb from "@/assets/products/caps-closures/38mm-herb-ftc.jpg";
import ftc38mmKetchup from "@/assets/products/caps-closures/38mm-ketchup-ftc.jpg";
import ftc38mmSalt from "@/assets/products/caps-closures/38mm-salt-ftc.jpg";
import ftc38mmTablet from "@/assets/products/caps-closures/38mm-tablet-ftc.jpg";
import ftc38mmTwofold from "@/assets/products/caps-closures/38mm-twofold-ftc.jpg";
import ftc45mmTablet from "@/assets/products/caps-closures/45mm-tablet-ftc.jpg";
import ftc46mmDouble from "@/assets/products/caps-closures/46mm-double-ftc.jpg";
import ftc53mmChDouble from "@/assets/products/caps-closures/53mm-ch-double-ftc.jpg";
import ftc53mmDouble from "@/assets/products/caps-closures/53mm-double-ftc.jpg";
import chapStick from "@/assets/products/caps-closures/chap-stick.jpg";
import perfumeCapSilverTeardrop from "@/assets/products/caps-closures/perfume-cap-silver-teardrop.png";
import perfumeCapGoldRibbed from "@/assets/products/caps-closures/perfume-cap-gold-ribbed.png";
import perfumeCapWhiteGold from "@/assets/products/caps-closures/perfume-cap-white-gold.png";
import perfumeCapGoldTextured from "@/assets/products/caps-closures/perfume-cap-gold-textured.png";
import perfumeCapRectangular from "@/assets/products/caps-closures/perfume-cap-rectangular.png";
import perfumeCapBlueOval from "@/assets/products/caps-closures/perfume-cap-blue-oval.png";
import perfumeCapBlackGold from "@/assets/products/caps-closures/perfume-cap-black-gold.png";
import perfumeCapSquare from "@/assets/products/caps-closures/perfume-cap-square.png";
import perfumeCapCurved from "@/assets/products/caps-closures/perfume-cap-curved.png";
import perfumeCapOvalBlack from "@/assets/products/caps-closures/perfume-cap-oval-black.png";
import bottleHandles from "@/assets/products/caps-closures/bottle-handles.png";
import metalizingFoilingCaps from "@/assets/products/caps-closures/metalizing-foiling-caps.png";

export interface CapsClosuresProduct {
  id: string;
  name: string;
  description: string;
  image: string;
}

export const capsClosuresProducts: CapsClosuresProduct[] = [
  { id: "14mm-long-ftc", name: "14mm Long FTC", description: "14mm Long Flip Top Cap", image: ftc14mmLong },
  { id: "14mm-short-ftc", name: "14mm Short FTC", description: "14mm Short Flip Top Cap", image: ftc14mmShort },
  { id: "15mm-ftc", name: "15mm FTC", description: "15mm Flip Top Cap", image: ftc15mm },
  { id: "15mm-square-ftc", name: "15mm Square FTC", description: "15mm Square Flip Top Cap", image: ftc15mmSquare },
  { id: "15mm-oval-ftc", name: "15mm Oval FTC", description: "15mm Oval Flip Top Cap", image: ftc15mmOval },
  { id: "15mm-ssft", name: "15mm SSFT", description: "15mm SSFT Cap", image: ftc15mmSsft },
  { id: "17mm-ftc", name: "17mm FTC", description: "17mm Flip Top Cap", image: ftc17mm },
  { id: "19mm-long-bek-ftc", name: "19mm Long BeK FTC", description: "19mm Long BeK Flip Top Cap", image: ftc19mmLongBek },
  { id: "19mm-long-ftc", name: "19mm Long FTC", description: "19mm Long Flip Top Cap", image: ftc19mmLong },
  { id: "19mm-short-bek-ftc", name: "19mm Short BeK FTC", description: "19mm Short BeK Flip Top Cap", image: ftc19mmShortBek },
  { id: "19mm-short-diamond-ftc", name: "19mm Short Diamond FTC", description: "19mm Short Diamond Flip Top Cap", image: ftc19mmShortDiamond },
  { id: "19mm-short-ftc-wo-plug", name: "19mm Short FTC Without Plug", description: "19mm Short Flip Top Cap Without Plug", image: ftc19mmShortWoPlug },
  { id: "19mm-short-ftc", name: "19mm Short FTC", description: "19mm Short Flip Top Cap", image: ftc19mmShort },
  { id: "19mm-short-kettle-ftc", name: "19mm Short Kettle FTC", description: "19mm Short Kettle Flip Top Cap", image: ftc19mmShortKettle },
  { id: "19mm-short-t-shape-ftc", name: "19mm Short T Shape FTC", description: "19mm Short T Shape Flip Top Cap", image: ftc19mmShortTShape },
  { id: "19mm-xs-ftc", name: "19mm XS FTC", description: "19mm Extra Small Flip Top Cap", image: ftc19mmXs },
  { id: "22mm-oval-ftc", name: "22mm Oval FTC", description: "22mm Oval Flip Top Cap", image: ftc22mmOval },
  { id: "22mm-ssft", name: "22mm SSFT", description: "22mm SSFT Cap", image: ftc22mmSsft },
  { id: "24mm-ftc-wo-plug", name: "24mm FTC Without Plug", description: "24mm Flip Top Cap Without Plug", image: ftc24mmWoPlug },
  { id: "24mm-ftc", name: "24mm FTC", description: "24mm Flip Top Cap", image: ftc24mm },
  { id: "24mm-long-bek-ftc", name: "24mm Long BeK FTC", description: "24mm Long BeK Flip Top Cap", image: ftc24mmLongBek },
  { id: "24mm-long-ftc", name: "24mm Long FTC", description: "24mm Long Flip Top Cap", image: ftc24mmLong },
  { id: "24mm-long-presstop", name: "24mm Long Presstop", description: "24mm Long Presstop Cap", image: ftc24mmLongPresstop },
  { id: "24mm-short-bek-ftc", name: "24mm Short BeK FTC", description: "24mm Short BeK Flip Top Cap", image: ftc24mmShortBek },
  { id: "25mm-new-ftc", name: "25mm New FTC", description: "25mm New Flip Top Cap", image: ftc25mmNew },
  { id: "25mm-bek-ftc", name: "25mm BeK FTC", description: "25mm BeK Flip Top Cap", image: ftc25mmBek },
  { id: "25mm-kettle-ftc", name: "25mm Kettle FTC", description: "25mm Kettle Flip Top Cap", image: ftc25mmKettle },
  { id: "25mm-mushroom-ftc", name: "25mm Mushroom FTC", description: "25mm Mushroom Flip Top Cap", image: ftc25mmMushroom },
  { id: "25mm-oval-ftc", name: "25mm Oval FTC", description: "25mm Oval Flip Top Cap", image: ftc25mmOval },
  { id: "25mm-ssft", name: "25mm SSFT", description: "25mm SSFT Cap", image: ftc25mmSsft },
  { id: "28mm-bek-ftc", name: "28mm BeK FTC", description: "28mm BeK Flip Top Cap", image: ftc28mmBek },
  { id: "28mm-diamond-ftc", name: "28mm Diamond FTC", description: "28mm Diamond Flip Top Cap", image: ftc28mmDiamond },
  { id: "28mm-ftc", name: "28mm FTC", description: "28mm Flip Top Cap", image: ftc28mm },
  { id: "28mm-kettle-ftc", name: "28mm Kettle FTC", description: "28mm Kettle Flip Top Cap", image: ftc28mmKettle },
  { id: "28mm-new-ftc", name: "28mm New FTC", description: "28mm New Flip Top Cap", image: ftc28mmNew },
  { id: "28mm-presstop", name: "28mm Presstop", description: "28mm Presstop Cap", image: ftc28mmPresstop },
  { id: "28mm-t-shape-ftc", name: "28mm T Shape FTC", description: "28mm T Shape Flip Top Cap", image: ftc28mmTShape },
  { id: "32mm-ketchup-ftc", name: "32mm Ketchup FTC", description: "32mm Ketchup Flip Top Cap", image: ftc32mmKetchup },
  { id: "38mm-ch-double-ftc", name: "38mm CH Double FTC", description: "38mm Child-Proof Double Flip Top Cap", image: ftc38mmChDouble },
  { id: "38mm-crc", name: "38mm CRC", description: "38mm Child Resistant Cap", image: ftc38mmCrc },
  { id: "38mm-double-ftc", name: "38mm Double FTC", description: "38mm Double Flip Top Cap", image: ftc38mmDouble },
  { id: "38mm-herb-ftc", name: "38mm Herb FTC", description: "38mm Herb Flip Top Cap", image: ftc38mmHerb },
  { id: "38mm-ketchup-ftc", name: "38mm Ketchup FTC", description: "38mm Ketchup Flip Top Cap", image: ftc38mmKetchup },
  { id: "38mm-salt-ftc", name: "38mm Salt FTC", description: "38mm Salt Shaker Flip Top Cap", image: ftc38mmSalt },
  { id: "38mm-tablet-ftc", name: "38mm Tablet FTC", description: "38mm Tablet Flip Top Cap", image: ftc38mmTablet },
  { id: "38mm-twofold-ftc", name: "38mm Two Fold FTC", description: "38mm Two Fold Flip Top Cap", image: ftc38mmTwofold },
  { id: "45mm-tablet-ftc", name: "45mm Tablet FTC", description: "45mm Tablet Flip Top Cap", image: ftc45mmTablet },
  { id: "46mm-double-ftc", name: "46mm Double FTC", description: "46mm Double Flip Top Cap", image: ftc46mmDouble },
  { id: "53mm-ch-double-ftc", name: "53mm CH Double FTC", description: "53mm Child-Proof Double Flip Top Cap", image: ftc53mmChDouble },
  { id: "53mm-double-ftc", name: "53mm Double FTC", description: "53mm Double Flip Top Cap", image: ftc53mmDouble },
  { id: "chap-stick", name: "Chap Stick Cap", description: "Lip Balm / Chap Stick Cap", image: chapStick },
  { id: "perfume-cap-silver-teardrop", name: "Silver Teardrop Perfume Cap", description: "Premium Silver Teardrop Perfume Bottle Cap", image: perfumeCapSilverTeardrop },
  { id: "perfume-cap-gold-ribbed", name: "Gold Ribbed Perfume Cap", description: "Elegant Gold Ribbed Perfume Bottle Cap", image: perfumeCapGoldRibbed },
  { id: "perfume-cap-white-gold", name: "White & Gold Perfume Cap", description: "White with Gold Interior Perfume Cap", image: perfumeCapWhiteGold },
  { id: "perfume-cap-gold-textured", name: "Gold Textured Perfume Cap", description: "Textured Gold Perfume Bottle Cap", image: perfumeCapGoldTextured },
  { id: "perfume-cap-rectangular", name: "Rectangular Perfume Cap", description: "Rectangular Design Perfume Bottle Cap", image: perfumeCapRectangular },
  { id: "perfume-cap-blue-oval", name: "Blue Oval Perfume Cap", description: "Blue Oval Perfume Bottle Cap", image: perfumeCapBlueOval },
  { id: "perfume-cap-black-gold", name: "Black & Gold Perfume Cap", description: "Black with Gold Accent Perfume Cap", image: perfumeCapBlackGold },
  { id: "perfume-cap-square", name: "Square Perfume Cap", description: "Square Design Perfume Bottle Cap", image: perfumeCapSquare },
  { id: "perfume-cap-curved", name: "Curved Perfume Cap", description: "Curved Design Perfume Bottle Cap", image: perfumeCapCurved },
  { id: "perfume-cap-oval-black", name: "Oval Black Perfume Cap", description: "Oval Black with Gold Perfume Cap", image: perfumeCapOvalBlack },
  { id: "bottle-handles", name: "Bottle Handles", description: "Colorful plastic bottle carrier handles in various sizes", image: bottleHandles },
  { id: "metalizing-foiling-caps", name: "Metalizing & Foiling Caps", description: "Premium caps with metalizing and foiling finishes", image: metalizingFoilingCaps },
];
