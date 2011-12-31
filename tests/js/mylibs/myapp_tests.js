TestCase("HumanTest", {
    setUp: function () {
        this.human = new MyApp.Human();
    },

    tearDown: function () {
        delete this.human;
    },

    "test hello" : function () {
        assertEquals("Hello World!", this.human.hello("World"));
    }
});

