import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function UrlForm({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div className="w-full max-w-sm">
      <div className={cn("flex flex-col gap-6", className)} {...props}>
        <form>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col items-center gap-2">
              <h1 className="text-xl font-bold">Encurtador de Link</h1>
            </div>
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <Label htmlFor="link">Seu link</Label>
                <Input
                  id="link"
                  type="link"
                  placeholder="https://example.com"
                  required
                />
              </div>
              <Button type="submit" className="w-full">
                Encurtar
              </Button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
