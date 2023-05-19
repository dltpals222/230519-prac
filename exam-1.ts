class Animal {
  // 궁금했던 점 : 여기서 적은 타입과 constructor에서 적은 타입은 왜 둘다 적어줘야 하는건가?
  //* gpt는 위의 private에서는 다른 사람들에게 정보를 제공할 뿐 기능은 없다고 한다.
  //? 다시 private name : string;이 없어도 되냐고 물어보니 없는건 안된다고 함 
  //? 그러니 위랑 아래 둘 다 적는게 맞다.
  protected name : string;
  
  constructor(name:string){
    this.name = name
  }

  speak():void{
    console.log(`${this.name}이(가) 소리를 내고있습니다.`)
  }
}

class Dog extends Animal{
  private breed : string;

  constructor(breed:string, name : string){
    super(name)
    this.breed = breed
  }

  displayInfo(){
    interface AD {
      '이름' : string;
      '품종' : string;
    }
    const AnimalDog : AD= {
      '이름' : this.name,
      '품종' : this.breed
    }

    console.log(AnimalDog)
  }
}

const animalDD = new Dog('푸들','똥강아지')

animalDD.displayInfo()
animalDD.speak()