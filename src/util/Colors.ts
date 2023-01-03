export enum Colors {
  yellow,
  green,
  violet,
  pink,
  red,
  teal,
  transparent,
}

 const  colorMap = new Map<Colors, string>([
  [Colors.yellow, "bg-orange-300"],
  [Colors.green, "bg-green-400"],
  [Colors.violet, "bg-blue-300"],
  [Colors.red,"bg-red-400"],
  [Colors.pink,"bg-pink-300"],
  [Colors.teal,"bg-teal-300"]
]);

export const getColor =(color?:Colors)=> colorMap.get(color??Colors.transparent);