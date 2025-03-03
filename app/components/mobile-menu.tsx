import { Button } from "@/components/ui/button";
import { Sheet, SheetClose, SheetContent, SheetFooter, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";
import { navigationItems } from "./navbar";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export function MobileMenu() {
    const location = usePathname();
    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button variant="outline" size="icon">
                    <Menu className="h-4 m-4" />
                </Button>
            </SheetTrigger>
            <SheetContent>
                <div className="mt-5 flex px-2 space-y-1 flex-col">
                    {navigationItems.map((items, index) => (
                        <Link 
                            key={index} 
                            href={items.href} 
                            className={cn(
                                location === items.href 
                                    ? 'bg-muted' 
                                    : 'hover:bg-muted hover:bg-opacity-75',
                                'group flex items-center px-2 py-2 text-md font-semibold rounded-md'
                            )}
                        >
                            {items.name}
                        </Link>
                    ))}
                </div>
                <SheetFooter className="mt-5">
                    <SheetClose asChild>
                        <Button type="submit">Close</Button>
                    </SheetClose>
                </SheetFooter>
            </SheetContent>
        </Sheet>
    )
}