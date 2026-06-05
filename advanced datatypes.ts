interface TitanShifter {
  id: number;
  name: string;
  titanName: string;
  powerLevel: number;
  role: "HERO" | "VILLAIN"; // Union Type
}

// Generic + Type Alias
type ApiResponse<T> = {
  success: boolean;
  message: string;
  data: T;
};

class TitanService {
  private shifters: TitanShifter[] = [
    {
      id: 1,
      name: "Eren Yeager",
      titanName: "Attack Titan",
      powerLevel: 9500,
      role: "HERO",
    },
    {
      id: 2,
      name: "Reiner Braun",
      titanName: "Armored Titan",
      powerLevel: 9000,
      role: "VILLAIN",
    },
  ];

  // Union Type
  findShifter(identifier: number | string): TitanShifter | undefined {
    return this.shifters.find(
      (shifter) => shifter.id === identifier || shifter.name === identifier,
    );
  }

  // Promise + Generic
  async getShifter(id: number): Promise<ApiResponse<TitanShifter>> {
    const shifter = this.findShifter(id);

    if (!shifter) {
      throw new Error("Titan Shifter Not Found");
    }

    return {
      success: true,
      message: "Shifter Found",
      data: shifter,
    };
  }

  async addShifter(shifter: TitanShifter): Promise<ApiResponse<TitanShifter>> {
    this.shifters.push(shifter);

    return {
      success: true,
      message: "Shifter Added",
      data: shifter,
    };
  }
}

async function main() {
  const titanService = new TitanService();
await titanService.addShifter({
    id: 3,
    name: "Annie Leonhart",
    titanName: "Female Titan",
    powerLevel: 8800,
    role: "VILLAIN",
  });
  // Union Type
  console.log(titanService.findShifter("Annie Leonhart"));

  // Promise + Generic
  const response = await titanService.getShifter(4);

  console.log(response);

  
}

main();
