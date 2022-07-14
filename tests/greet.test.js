describe("Greet function", function () {


    it("Should greet the name that was entered with the selected language", function () {
        const greeting = Greetings()
       
        assert.equal("Hola, Ally", greeting.greet("Ally", "esp"));

    })

    // it("Should display an error message when a name is repeated", function () {
    //     const greeting = Greetings()
       
    //     assert.equal("Hola, Ally", greeting.greet("Ally", "esp"));

    // })

    it("Should store the names entered into an empty array", function () {
        const greeting = Greetings()

        greeting.setNames('Demi')
        assert.deepEqual(['Demi'], greeting.getNames());

    })



    it("Should get the length of the names stored", function () {
        const greeting = Greetings()

        greeting.setNames('Ally')
        greeting.setNames('Mia')
        greeting.setNames('Demi')
        greeting.setNames('Faith')
  
        assert.equal(4, greeting.nameCount());
  
      })

   

})