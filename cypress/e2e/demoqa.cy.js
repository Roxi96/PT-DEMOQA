import 'cypress-file-upload';

describe("evaluacion tecnica DEMOQA", () => {
 
  beforeEach(() => {
    // cy.restoreLocalStorage();
    cy.viewport(1920, 1080);
    cy.visit('https://demoqa.com/')
  });

  it('paso 1', () => {
    cy.get("h5").contains("Elements").click();
    cy.get("span").contains("Check Box").click();
    cy.get("div.rct-options").find("button").eq(0).click()
    cy.get("span.rct-title").contains("Excel File.doc").click()
    cy.get("span.rct-title").contains("Word File.doc").click()
  })

  it('paso 2', () => {
    cy.get("h5").contains("Elements").click();
    cy.get("span").contains("Dynamic Properties").click();
    cy.wait(5000);
    cy.get("button#enableAfter").click();
  })

  it('paso 3', () => {
    cy.get("h5").contains("Elements").click();
    cy.get("span").contains("Web Tables").click();
    cy.get("div.rt-tr[role=row]").eq(1).scrollIntoView().find("svg").eq(1).click();
    cy.get("button").contains("Add").click();
    cy.get("form").find("input").eq(0).type("Juan");
    cy.get("form").find("input").eq(1).type("Perez");
    cy.get("form").find("input").eq(2).type("test@test.bi.com.gt");
    cy.get("form").find("input").eq(3).type("26");
    cy.get("form").find("input").eq(4).type("8000");
    cy.get("form").find("input").eq(5).type("Guatemala");
  })

  it('paso 4', () => {
    cy.get("h5").contains("Forms").click();
    cy.get("span").contains("Practice Form").click();
    cy.get("form").find("input").eq(0).type("Roxana Nazaret");
    cy.get("form").find("input").eq(1).type("Howard Acosta");
    cy.get("form").find("input").eq(2).type("test@test.bi.com.gt");
    cy.get("form").find("input").eq(6).type("1234567890");
    cy.get("label[for=gender-radio-2").click();
    cy.get("form").find("input").eq(7).click();
    cy.get("form").find("input").eq(7).click();
    cy.get("select").eq(0).select("September");
    cy.get("select").eq(1).select("1996");
    cy.get("div[role=listbox]").find("div").contains("18").click({force:true})
    cy.get("form").find("input").eq(8).type("Maths{enter}");
    cy.get("form").find("input").eq(9).click({force:true});
    cy.get("form").find("input").eq(10).click({force:true});

    const fileName = 'archivo.txt';

    cy.fixture(fileName).then((fileContent) => {
      cy.get("input#uploadPicture").then((inputFile) => {
        const blob = new Blob([fileContent], { type: 'text/plain' });
        const testFile = new File([blob], fileName);

        const dataTransfer = new DataTransfer();
        dataTransfer.items.add(testFile);

        inputFile[0].files = dataTransfer.files;

        cy.wrap(inputFile).trigger('change', { force: true });
      });
    });
    cy.get("form").find("textarea").type("Banco Industrial Zona 4. 7ª. Avenida 5-10, Zona 4 Centro Financiero Torre I");
    cy.get("form").find("input").eq(13).click({force:true}).type("NCR{enter}");
    cy.get("form").find("input").eq(14).click({force:true}).type("Delhi{enter}");
    cy.get("button#submit").click();
    cy.get("button").contains("Close").click();
  });
  
  it('paso 5', () => {
    cy.get("h5").contains("Book Store Application").click();
    cy.get("a").contains("Understanding ECMAScript 6").click();
    const currentWindowHandle = cy.state('window');
    cy.contains("label","https://leanpub.com/understandinges6/read").click();
  
    cy.window().then((newWindow) => {
   
      newWindow.top.close();
      cy.window().then((originalWindow) => {
        expect(originalWindow).to.equal(currentWindowHandle);

      });
    });
    cy.go("back");
  
 
 
  });
   
  })
 

  
    

  
  

