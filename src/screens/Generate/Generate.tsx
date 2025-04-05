import { InfoIcon } from "lucide-react";
import { Button } from "../../components/ui/button";
import { Card, CardContent } from "../../components/ui/card";
import { Separator } from "../../components/ui/separator";
import { Textarea } from "../../components/ui/textarea";

export const Generate = (): JSX.Element => {
  // Navigation items data
  const navItems = [
    { name: "Generate", active: true },
    { name: "Assets", active: false },
    { name: "History", active: false },
    { name: "Explore", active: false },
  ];

  return (
    <div className="bg-black flex flex-row justify-center w-full">
      <div className="bg-black w-full max-w-[1440px] h-[940px] relative">
        <header className="w-full h-16 top-0 left-0 bg-transparent">
          <div className="flex items-center gap-3 absolute top-5 left-5">
            <div className="relative w-6 h-6 bg-[#ff6a15] rounded-[34px] overflow-hidden">
              <img
                className="absolute w-[17px] h-2.5 top-[7px] left-[3px]"
                alt="Helix Logo"
                src="/group-2890.png"
              />
            </div>

            <div className="flex items-center gap-1">
              <div className="font-title-small font-[number:var(--title-small-font-weight)] text-white text-[length:var(--title-small-font-size)] tracking-[var(--title-small-letter-spacing)] leading-[var(--title-small-line-height)] whitespace-nowrap [font-style:var(--title-small-font-style)]">
                Helix
              </div>
            </div>
          </div>

          <Separator
            orientation="vertical"
            className="absolute w-px h-6 top-5 left-[126px] bg-white/20"
          />

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

          <Button
            variant="outline"
            className="inline-flex items-center gap-2 px-4 py-1.5 absolute top-4 left-[1215px] bg-[#331a0c] rounded-2xl border border-solid border-[#ff6b16] backdrop-blur-[10px] backdrop-brightness-[100%] [-webkit-backdrop-filter:blur(10px)_brightness(100%)]"
          >
            <span className="font-title-small font-[number:var(--title-small-font-weight)] text-[#ff6b16] text-[length:var(--title-small-font-size)] tracking-[var(--title-small-letter-spacing)] leading-[var(--title-small-line-height)] whitespace-nowrap [font-style:var(--title-small-font-style)]">
              Subscribe
            </span>

            <Separator
              orientation="vertical"
              className="w-px h-4 bg-white/20"
            />

            <div className="flex items-center gap-0.5">
              <img
                className="w-4 h-4"
                alt="Credits Icon"
                src="/component-3.svg"
              />
              <span className="font-title-small font-[number:var(--title-small-font-weight)] text-[#ff6b16] text-[length:var(--title-small-font-size)] tracking-[var(--title-small-letter-spacing)] leading-[var(--title-small-line-height)] whitespace-nowrap [font-style:var(--title-small-font-style)]">
                241
              </span>
            </div>
          </Button>

          <div className="absolute w-8 h-8 top-4 left-[1381px] rounded-[19.2px] bg-[url(/frame-1597880070.png)] bg-cover bg-[50%_50%]" />
        </header>

        <Card className="absolute w-[1432px] h-[872px] top-16 left-1 bg-[#101010] rounded-lg overflow-hidden border-0">
          <CardContent className="p-0">
            <div className="absolute w-[534px] h-80 top-[119px] left-[449px] flex justify-center items-center">
              <img
                className="absolute w-[111px] h-[220px] top-[50px] left-[423px]"
                alt="Frame"
                src="/frame-1597879849.svg"
              />
              <img
                className="absolute w-[111px] h-[220px] top-[50px] left-0"
                alt="Frame"
                src="/frame-1597879850.svg"
              />
              <img
                className="absolute w-80 h-80 top-0 left-[107px]"
                alt="Frame"
                src="/frame-1597879848.svg"
              />
            </div>

            <Card className="absolute w-[976px] h-[154px] top-[694px] left-[228px] bg-[#1f1f1f] rounded-2xl overflow-hidden border-0">
              <CardContent className="p-0">
                <div className="flex justify-between items-center p-3">
                  <div className="flex items-center gap-3">
                    <div className="font-title-small font-[number:var(--title-small-font-weight)] text-white text-[length:var(--title-small-font-size)] tracking-[var(--title-small-letter-spacing)] leading-[var(--title-small-line-height)] whitespace-nowrap [font-style:var(--title-small-font-style)]">
                      Generate
                    </div>

                    <Button
                      variant="outline"
                      size="sm"
                      className="flex items-center justify-center gap-1 pl-2 pr-3 py-1 rounded-[22px] border border-solid border-[#ffffff33] h-auto bg-transparent"
                    >
                      <img
                        className="w-4 h-4"
                        alt="Credits Icon"
                        src="/component-3.svg"
                      />
                      <span className="font-description-x-small font-[number:var(--description-x-small-font-weight)] text-[#ff6b16] text-[length:var(--description-x-small-font-size)] text-center tracking-[var(--description-x-small-letter-spacing)] leading-[var(--description-x-small-line-height)] whitespace-nowrap [font-style:var(--description-x-small-font-style)]">
                        2 credits left
                      </span>
                    </Button>
                  </div>

                  <div className="flex items-center gap-2">
                    <InfoIcon className="w-4 h-4 text-[#535353]" />
                    <div className="font-paragraph-small font-[number:var(--paragraph-small-font-weight)] text-[#535353] text-[length:var(--paragraph-small-font-size)] tracking-[var(--paragraph-small-letter-spacing)] leading-[var(--paragraph-small-line-height)] whitespace-nowrap [font-style:var(--paragraph-small-font-style)]">
                      How to achieve good result?
                    </div>
                  </div>
                </div>

                <div className="mx-1 mt-2">
                  <Card className="bg-[#101010] rounded-xl overflow-hidden border-0">
                    <CardContent className="p-3">
                      <Textarea
                        placeholder="Placeholder text..."
                        className="w-full h-[60px] bg-transparent border-0 resize-none font-paragraph-small font-[number:var(--paragraph-small-font-weight)] text-[#535353] text-[length:var(--paragraph-small-font-size)] tracking-[var(--paragraph-small-letter-spacing)] leading-[var(--paragraph-small-line-height)] focus-visible:ring-0 p-0"
                      />

                      <div className="flex justify-end mt-2">
                        <div className="font-description-2x-small font-[number:var(--description-2x-small-font-weight)] text-[#a2a2a2] text-[length:var(--description-2x-small-font-size)] text-right tracking-[var(--description-2x-small-letter-spacing)] leading-[var(--description-2x-small-line-height)] whitespace-nowrap [font-style:var(--description-2x-small-font-style)]">
                          0/200
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CardContent>
            </Card>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}; 