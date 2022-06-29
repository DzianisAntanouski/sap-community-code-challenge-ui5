const { wdi5 } = require("wdio-ui5-service")
const Detail = require("./pageObjects/Detail")
const Main = require("./pageObjects/Main")

/*
You have all done a great job so far in building an app that passes predefined tests 🎉
Now it's time to take it one step further and write your own tests 🚀
For week 4 the task is to write a minimum of 2 tests and make them pass ✅✅
There are no boundaries, get creative and explore the framework 🎨
You can get inspiration here:
    🗓  test files of the previous weeks
    ℹ️  examples in wdi5 repository: https://github.com/js-soft/wdi5/tree/main/examples/ui5-js-app/e2e-test-config
    📚  official wdi5 documentation: https://js-soft.github.io/wdi5/#/
You can share your results and experience in the SAP Community 💙
https://groups.community.sap.com/t5/coffee-corner-discussions/sap-community-code-challenge-testing-ui5-apps-with-wdi5/td-p/5229
*/

describe("week4: main or detail page ...", () => {
    before(async () => {
        await Main.open();       
    })

    it("the filtering check", async () => {
        const List = await browser.asControl({
            selector: {
                id: "productList",
                viewName: Main._viewName
              }
        })
        const filter = await browser.asControl({
            selector: {
                id: "MultiComboBox",
                viewName: Main._viewName
              }
        });
        await filter.open();
        await filter.setSelectedKeys(["Little Group"]);
        await filter.close();
        const ListItems = await List.getItems();

        expect(ListItems.length).toEqual(1);        
    });

    it("the filtering check 3 item", async () => {
        const List = await browser.asControl({
            selector: {
                id: "productList",
                viewName: Main._viewName
              }
        })
        const filter = await browser.asControl({
            selector: {
                id: "MultiComboBox",
                viewName: Main._viewName
              }
        });
        await filter.open();
        await filter.setSelectedKeys(["Little Group", "Windler Inc", "Ullrich - Gaylord"]);
        await filter.close();
        const ListItems = await List.getItems();

        expect(ListItems.length).toEqual(3);        
    });

    it("reset filters", async () => {
        const List = await browser.asControl({
            selector: {
                id: "productList",
                viewName: Main._viewName
              }
        })
        const filter = await browser.asControl({
            selector: {
                id: "MultiComboBox",
                viewName: Main._viewName
              }
        });
        await filter.open();
        await filter.setSelectedKeys([]);
        await filter.close();
        const ListItems = await List.getItems();

        expect(ListItems.length).toBeGreaterThanOrEqual(10);        
    });
})