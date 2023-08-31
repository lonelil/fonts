import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { fontMap, getAllFonts } from "@/lib/fonts";

export default function Home() {
  return (
    <main className="container min-h-screen flex items-center flex-col justify-center my-12 lg:my-0">
      <h1 className="text-4xl font-semibold">fonts.lonelil.com</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 my-4">
        {getAllFonts().map((font, i) => {
          const fontMapped = fontMap.find((fonta) => fonta.id === font);
          const cssName = fontMapped ? fontMapped.name : font;
          return (
            <Card key={i} className="w-full">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{font}</CardTitle>
              </CardHeader>
              <CardContent
                style={{
                  fontFamily: `"${cssName}", sans-serif`,
                }}
              >
                <p>You kept me like a secret but I kept you like an oath.</p>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </main>
  );
}
