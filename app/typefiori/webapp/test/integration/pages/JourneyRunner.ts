import JourneyRunner from "sap/fe/test/JourneyRunner";
import ListReport from "sap/fe/test/ListReport";
import ObjectPage from "sap/fe/test/ObjectPage";
import CustomBooksSetList from "./BooksSetList";
import CustomBooksSetObjectPage from "./BooksSetObjectPage";

const runner = new JourneyRunner({
    launchUrl: sap.ui.require.toUrl("com/subbu/typefiori") + "/test/flp.html#app-preview",
    pages: {
        onTheBooksSetList: new ListReport(
            {
                appId: "com.subbu.typefiori",
                componentId: "BooksSetList",
                entitySet: "",
                contextPath: "/BooksSet"
            },
            CustomBooksSetList
        ),
        onTheBooksSetObjectPage: new ObjectPage(
            {
                appId: "com.subbu.typefiori",
                componentId: "BooksSetObjectPage",
                entitySet: "",
                contextPath: "/BooksSet"
            },
            CustomBooksSetObjectPage
        )
    },
    async: true
});

export default runner;
