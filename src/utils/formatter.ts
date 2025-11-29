export function stringTitle(str: string){
    const words = str.split(" ");
    const titleWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase());
    return titleWords.join(" ");
}