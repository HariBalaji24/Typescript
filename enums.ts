//1.types of enums

//1.1 Numeric Enums
enum Direction {
  Up,     // 0
  Down,   // 1
  Left=11,   // 11
  Right   // 12
} console.log(Direction.Up,Direction.Down, Direction.Left,Direction.Right); 

//1.2 String Enums
enum Direction1 {
  Up = "UP",    
  Down = "DOWN",
  Left = "LEFT"
} console.log(Direction1.Up,Direction1.Down, Direction1.Left);

//1.3 Heterogeneous Enums
enum BooleanYesNo {
  No = 0,
  Yes = "YES",
} console.log(BooleanYesNo.No,BooleanYesNo.Yes);


//2.Reverse Mapping
enum Direction2 {
  Up=3,
  Down=10,
  Left='MOVING LEFT' 
} console.log(Direction2[10],Direction2[3],Direction2['Left']);
//console.log(Direction2['MOVING LEFT']); undefined
