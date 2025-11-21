import MenuPreview from "@/components/MenuPreview";
import menuItems from "@/schemas/menuItems";

export default function MenuPage() {
  return <MenuPreview items={menuItems} />;
}
