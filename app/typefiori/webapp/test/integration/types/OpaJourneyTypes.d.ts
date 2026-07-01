import type Opa5 from "sap/ui/test/Opa5";
import type { actions as ListReportActions, assertions as ListReportAssertions } from "sap/fe/test/ListReport";
import type { actions as ObjectPageActions, assertions as ObjectPageAssertions } from "sap/fe/test/ObjectPage";
import type { actions as TemplatePageActions, assertions as TemplatePageAssertions } from "sap/fe/test/TemplatePage";
import type Shell from "sap/fe/test/Shell";
import type BaseArrangements from "sap/fe/test/BaseArrangements";
import type { actions as BooksSetListCustomActions, assertions as BooksSetListCustomAssertions } from "../pages/BooksSetList";
import type { actions as BooksSetObjectPageCustomActions, assertions as BooksSetObjectPageCustomAssertions } from "../pages/BooksSetObjectPage";

export type Given = Opa5 & BaseArrangements & {
    iTearDownMyApp: () => Given;
    iStartMyApp: (sAppHash?: string, mInUrlParameters?: object) => Given;
    and: Given;
};

export type When = Opa5 & BaseArrangements & {
    onTheBooksSetList: Opa5 & ListReportActions & TemplatePageActions & typeof BooksSetListCustomActions;
    onTheBooksSetObjectPage: Opa5 & ObjectPageActions & TemplatePageActions & typeof BooksSetObjectPageCustomActions;
    onTheShell: Shell;
};

export type Then = Opa5 & BaseArrangements & {
    onTheBooksSetList: Opa5 & ListReportAssertions & TemplatePageAssertions & typeof BooksSetListCustomAssertions;
    onTheBooksSetObjectPage: Opa5 & ObjectPageAssertions & TemplatePageAssertions & typeof BooksSetObjectPageCustomAssertions;
    onTheShell: Shell;
};
