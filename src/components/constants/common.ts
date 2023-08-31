import { bookType } from "@/types/common";

export const bookConst: bookType = Object.freeze({
    kind: "",
    id: "",
    etag: "",
    selfLink: "",
    volumeInfo: {
      title: "",
      subtitle: "",
      authors: [],
      publisher: "",
      publishedDate: "",
      description: "",
      industryIdentifiers: [
        {
        type: "",
        identifier:"",
        }
        ],
      readingModes: {
        text: false,
        image: false
      },
      pageCount: 0,
      printedPageCount: 0,
      dimensions: {
        height: "",
        width: "",
        thickness: ""
      },
      printType: "",
      categories: [],
      averageRating: 0,
      ratingsCount: 0,
      maturityRating: "",
      allowAnonLogging: false,
      contentVersion: "",
      panelizationSummary: {
        containsEpubBubbles: false,
        containsImageBubbles: false
      },
      imageLinks: {
        smallThumbnail: "",
        thumbnail: "",
        small: "",
        medium: "",
        large: "",
        extraLarge: ""
      },
      language: "",
      previewLink: "",
      infoLink: "",
      canonicalVolumeLink: ""
    },
    saleInfo: {
      country: "",
      saleability: "",
      isEbook: false
    },
    accessInfo: {
      country: "",
      viewability: "",
      embeddable: false,
      publicDomain: false,
      textToSpeechPermission: "",
      epub: {
        isAvailable: false
      },
      pdf: {
        isAvailable: false,
        acsTokenLink: ""
      },
      webReaderLink: "",
      accessViewStatus: "",
      quoteSharingAllowed: false
    }
});
