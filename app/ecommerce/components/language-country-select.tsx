import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function LanguageCountrySelect() {
    return (
        <div className="flex items-center gap-2">
            <div>
                <Select>
                    <SelectTrigger className="bg-black border-0 w-[60px]">
                        <SelectValue placeholder="EN" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="US">US</SelectItem>
                        <SelectItem value="FR">FR</SelectItem>
                        <SelectItem value="RU">RU</SelectItem>
                    </SelectContent>
                </Select>
            </div>
            <div>
                <Select>
                    <SelectTrigger className="w-[160px] bg-black border-0 focus:ring-0 focus:border-0">
                        <SelectValue placeholder="United Kingdom" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="unitedkingdom">United Kingdom</SelectItem>
                        <SelectItem value="unitedstates">United States</SelectItem>
                        <SelectItem value="france">France</SelectItem>
                        <SelectItem value="russia">Russia</SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </div>
    );
}
