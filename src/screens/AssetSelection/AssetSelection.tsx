import { ImageIcon, PlusIcon, TextIcon } from "lucide-react";
import { Card, CardContent, CardHeader } from "../../components/ui/card.js";
import { Input } from "../../components/ui/input.js";
import { Separator } from "../../components/ui/separator.js";
import { Textarea } from "../../components/ui/textarea.js";

export const AssetSelection = (): JSX.Element => {
  // Color palette data
  const colorPalette = [
    { id: 1, label: "Accent color" },
    { id: 2, label: "Additional color" },
    { id: 3, label: "Additional color" },
    { id: 4, label: "Additional color" },
    { id: 5, label: "Additional color" },
  ];

  // Navigation items data
  const navItems = [
    { name: "Generate", active: false },
    { name: "Assets", active: true },
    { name: "History", active: false },
    { name: "Explore", active: false },
  ];

  return (
    <div className="bg-black flex flex-row justify-center w-full">
      <div className="bg-black w-[1440px] h-[1119px] relative">
        <div className="absolute w-[1432px] h-[1051px] top-16 left-1 bg-[#101010] rounded-lg">
          {/* Color Palette Section */}
          <Card className="absolute w-[846px] h-[200px] top-[280px] left-[293px] bg-[#1f1f1f] rounded-2xl overflow-hidden border-0">
            <CardHeader className="p-0 pt-[7px] px-4 flex flex-row justify-between items-center">
              <span className="font-paragraph-small font-[number:var(--paragraph-small-font-weight)] text-[#a2a2a2] text-[length:var(--paragraph-small-font-size)] tracking-[var(--paragraph-small-letter-spacing)] leading-[var(--paragraph-small-line-height)] [font-style:var(--paragraph-small-font-style)]">
                Color palette
              </span>
              <span className="font-paragraph-small font-[number:var(--paragraph-small-font-weight)] text-[#ff6b16] text-[length:var(--paragraph-small-font-size)] tracking-[var(--paragraph-small-letter-spacing)] leading-[var(--paragraph-small-line-height)] [font-style:var(--paragraph-small-font-style)]">
                Add color
              </span>
            </CardHeader>
            <CardContent className="p-0 pt-2">
              <div className="flex gap-2 px-1">
                {colorPalette.map((color) => (
                  <div
                    key={color.id}
                    className="relative w-40 h-40 bg-[#101010] rounded-xl"
                  >
                    <div className="flex w-[152px] h-6 items-center justify-center gap-2.5 px-10 py-1 absolute top-[132px] left-1 bg-[#1f1f1f] rounded-lg">
                      <div className="relative w-fit mt-[-1.00px] font-description-x-small font-[number:var(--description-x-small-font-weight)] text-[#535353] text-[length:var(--description-x-small-font-size)] text-center tracking-[var(--description-x-small-letter-spacing)] leading-[var(--description-x-small-line-height)] whitespace-nowrap [font-style:var(--description-x-small-font-style)]">
                        {color.label}
                      </div>
                    </div>
                    <PlusIcon className="absolute w-6 h-6 top-14 left-[68px]" />
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Brand Name Section */}
          <Card className="absolute w-[592px] h-20 top-10 left-[547px] bg-[#1f1f1f] rounded-2xl overflow-hidden border-0">
            <CardHeader className="p-0 pt-[7px] px-4">
              <span className="font-paragraph-small font-[number:var(--paragraph-small-font-weight)] text-[#a2a2a2] text-[length:var(--paragraph-small-font-size)] tracking-[var(--paragraph-small-letter-spacing)] leading-[var(--paragraph-small-line-height)] [font-style:var(--paragraph-small-font-style)]">
                Brand name
              </span>
            </CardHeader>
            <CardContent className="p-0 pt-2 px-1">
              <div className="w-[584px] h-10 bg-[#101010] rounded-xl overflow-hidden">
                <Input
                  className="h-10 bg-transparent border-0 text-[#535353] font-title-small font-[number:var(--title-small-font-weight)] text-[length:var(--title-small-font-size)] tracking-[var(--title-small-letter-spacing)] leading-[var(--title-small-line-height)] [font-style:var(--title-small-font-style)]"
                  placeholder="Enter your brand name"
                />
              </div>
            </CardContent>
          </Card>

          {/* Logo Section */}
          <Card className="absolute w-[230px] h-[216px] top-10 left-[293px] bg-[#1f1f1f] rounded-2xl overflow-hidden border-0">
            <CardHeader className="p-0 pt-[7px] px-4 flex flex-row justify-between items-center">
              <span className="font-paragraph-small font-[number:var(--paragraph-small-font-weight)] text-[#a2a2a2] text-[length:var(--paragraph-small-font-size)] tracking-[var(--paragraph-small-letter-spacing)] leading-[var(--paragraph-small-line-height)] [font-style:var(--paragraph-small-font-style)]">
                Logo
              </span>
              <span className="font-paragraph-small font-[number:var(--paragraph-small-font-weight)] text-[#ff6b16] text-[length:var(--paragraph-small-font-size)] tracking-[var(--paragraph-small-letter-spacing)] leading-[var(--paragraph-small-line-height)] [font-style:var(--paragraph-small-font-style)]">
                Upload
              </span>
            </CardHeader>
            <CardContent className="p-0 pt-2 px-1">
              <div className="w-[222px] h-44 bg-[#101010] rounded-xl overflow-hidden flex items-center justify-center">
                <div className="flex flex-col items-center gap-2">
                  <ImageIcon className="w-6 h-6" />
                  <div className="flex flex-col items-center gap-1">
                    <div className="font-title-small font-[number:var(--title-small-font-weight)] text-white text-[length:var(--title-small-font-size)] text-center tracking-[var(--title-small-letter-spacing)] leading-[var(--title-small-line-height)] whitespace-nowrap [font-style:var(--title-small-font-style)]">
                      Add your logo
                    </div>
                    <div className="font-paragraph-small font-[number:var(--paragraph-small-font-weight)] text-[#535353] text-[length:var(--paragraph-small-font-size)] text-center tracking-[var(--paragraph-small-letter-spacing)] leading-[var(--paragraph-small-line-height)] whitespace-nowrap [font-style:var(--paragraph-small-font-style)]">
                      SVG format only
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* References Section */}
          <Card className="absolute w-[846px] h-[260px] top-[748px] left-[293px] bg-[#1f1f1f] rounded-2xl overflow-hidden border-0">
            <CardHeader className="p-0 pt-[7px] px-4 flex flex-row justify-between items-center">
              <span className="font-paragraph-small font-[number:var(--paragraph-small-font-weight)] text-[#a2a2a2] text-[length:var(--paragraph-small-font-size)] tracking-[var(--paragraph-small-letter-spacing)] leading-[var(--paragraph-small-line-height)] [font-style:var(--paragraph-small-font-style)]">
                References
              </span>
              <span className="font-paragraph-small font-[number:var(--paragraph-small-font-weight)] text-[#ff6b16] text-[length:var(--paragraph-small-font-size)] tracking-[var(--paragraph-small-letter-spacing)] leading-[var(--paragraph-small-line-height)] [font-style:var(--paragraph-small-font-style)]">
                Add an item
              </span>
            </CardHeader>
            <CardContent className="p-0 pt-2 px-1">
              <div className="w-[838px] h-[220px] bg-[#101010] rounded-xl overflow-hidden flex items-center justify-center">
                <div className="flex flex-col items-center gap-2">
                  <ImageIcon className="w-6 h-6" />
                  <div className="flex flex-col items-center gap-1">
                    <div className="font-title-small font-[number:var(--title-small-font-weight)] text-white text-[length:var(--title-small-font-size)] text-center tracking-[var(--title-small-letter-spacing)] leading-[var(--title-small-line-height)] whitespace-nowrap [font-style:var(--title-small-font-style)]">
                      Drag and drop your references
                    </div>
                    <div className="font-paragraph-small font-[number:var(--paragraph-small-font-weight)] text-[#535353] text-[length:var(--paragraph-small-font-size)] text-center tracking-[var(--paragraph-small-letter-spacing)] leading-[var(--paragraph-small-line-height)] whitespace-nowrap [font-style:var(--paragraph-small-font-style)]">
                      It can be styled images, patterns brand pictures or just
                      an images that visually bounded with brand feeling
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Brand Exploration Section */}
          <Card className="absolute w-[592px] h-28 top-36 left-[547px] bg-[#1f1f1f] rounded-2xl overflow-hidden border-0">
            <CardHeader className="p-0 pt-[3px] px-4">
              <span className="font-paragraph-small font-[number:var(--paragraph-small-font-weight)] text-[#a2a2a2] text-[length:var(--paragraph-small-font-size)] tracking-[var(--paragraph-small-letter-spacing)] leading-[var(--paragraph-small-line-height)] [font-style:var(--paragraph-small-font-style)]">
                Brand Exploration
              </span>
            </CardHeader>
            <CardContent className="p-0 pt-1 px-1">
              <div className="w-[584px] h-[76px] bg-[#101010] rounded-xl overflow-hidden">
                <Textarea
                  className="h-full bg-transparent border-0 resize-none text-[#535353] font-title-small font-[number:var(--title-small-font-weight)] text-[length:var(--title-small-font-size)] tracking-[var(--title-small-letter-spacing)] leading-[var(--title-small-line-height)] [font-style:var(--title-small-font-style)]"
                  placeholder="Describe your brand vision in detail"
                />
              </div>
            </CardContent>
          </Card>

          {/* Fonts Section */}
          <Card className="absolute w-[846px] h-[220px] top-[504px] left-[293px] bg-[#1f1f1f] rounded-2xl overflow-hidden border-0">
            <CardHeader className="p-0 pt-[7px] px-4 flex flex-row justify-between items-center">
              <span className="font-paragraph-small font-[number:var(--paragraph-small-font-weight)] text-[#a2a2a2] text-[length:var(--paragraph-small-font-size)] tracking-[var(--paragraph-small-letter-spacing)] leading-[var(--paragraph-small-line-height)] [font-style:var(--paragraph-small-font-style)]">
                Fonts
              </span>
              <span className="font-paragraph-small font-[number:var(--paragraph-small-font-weight)] text-[#ff6b16] text-[length:var(--paragraph-small-font-size)] tracking-[var(--paragraph-small-letter-spacing)] leading-[var(--paragraph-small-line-height)] [font-style:var(--paragraph-small-font-style)]">
                Add an item
              </span>
            </CardHeader>
            <CardContent className="p-0 pt-2 px-1 flex gap-2">
              <div className="w-[417px] h-[180px] bg-[#101010] rounded-xl overflow-hidden flex items-center justify-center">
                <div className="flex flex-col items-center gap-2">
                  <TextIcon className="w-6 h-6" />
                  <div className="flex flex-col items-center gap-1">
                    <div className="font-title-small font-[number:var(--title-small-font-weight)] text-white text-[length:var(--title-small-font-size)] text-center tracking-[var(--title-small-letter-spacing)] leading-[var(--title-small-line-height)] whitespace-nowrap [font-style:var(--title-small-font-style)]">
                      Add your font for the headings
                    </div>
                    <div className="font-paragraph-small font-[number:var(--paragraph-small-font-weight)] text-[#535353] text-[length:var(--paragraph-small-font-size)] text-center tracking-[var(--paragraph-small-letter-spacing)] leading-[var(--paragraph-small-line-height)] whitespace-nowrap [font-style:var(--paragraph-small-font-style)]">
                      Supported formats TTF, OTF
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-[417px] h-[180px] bg-[#101010] rounded-xl overflow-hidden flex items-center justify-center">
                <div className="flex flex-col items-center gap-2">
                  <TextIcon className="w-6 h-6" />
                  <div className="flex flex-col items-center gap-1">
                    <div className="font-title-small font-[number:var(--title-small-font-weight)] text-white text-[length:var(--title-small-font-size)] text-center tracking-[var(--title-small-letter-spacing)] leading-[var(--title-small-line-height)] whitespace-nowrap [font-style:var(--title-small-font-style)]">
                      Add your additional font
                    </div>
                    <div className="font-paragraph-small font-[number:var(--paragraph-small-font-weight)] text-[#535353] text-[length:var(--paragraph-small-font-size)] text-center tracking-[var(--paragraph-small-letter-spacing)] leading-[var(--paragraph-small-line-height)] whitespace-nowrap [font-style:var(--paragraph-small-font-style)]">
                      Supported formats TTF, OTF
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Header */}
        <header className="absolute w-[1437px] h-16 top-0 left-0 bg-transparent">
          <div className="inline-flex items-center gap-3 absolute top-5 left-5">
            <div className="relative w-6 h-6 bg-[#ff6a15] rounded-[34px] overflow-hidden">
              <img
                className="absolute w-[17px] h-2.5 top-[7px] left-[3px]"
                alt="Group"
                src="/group-2890.png"
              />
            </div>

            <div className="inline-flex items-center gap-1 relative flex-[0_0_auto]">
              <div className="relative w-fit mt-[-1.00px] font-title-small font-[number:var(--title-small-font-weight)] text-white text-[length:var(--title-small-font-size)] tracking-[var(--title-small-letter-spacing)] leading-[var(--title-small-line-height)] whitespace-nowrap [font-style:var(--title-small-font-style)]">
                Helix
              </div>
            </div>
          </div>

          <nav className="flex items-center gap-10 absolute top-[23px] left-[166px]">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="flex flex-col items-start gap-[22px]"
              >
                <div
                  className={`font-title-small font-[number:var(--title-small-font-weight)] ${item.active ? "text-white" : "text-[#a2a2a2]"} text-[length:var(--title-small-font-size)] tracking-[var(--title-small-letter-spacing)] leading-[var(--title-small-line-height)] whitespace-nowrap [font-style:var(--title-small-font-style)]`}
                >
                  {item.name}
                </div>
              </div>
            ))}
          </nav>

          <Separator
            className="absolute w-px h-6 top-5 left-[126px] bg-white/10"
            orientation="vertical"
          />
        </header>
      </div>
    </div>
  );
}; 