const swaggerAutogen = require('swagger-autogen')()

const doc = {
  info: {
    version: "1.0.0",
    title: "Sritrang Smart Receive API",
    description: "<b>Sritrang Smart Receive API</b> Module Documentation."
  },
  host: "localhost:8080",
  basePath: "/",
  schemes: ['http', 'https'],
  consumes: ['application/json'],
  produces: ['application/json'],
  tags: [{
    "name": "User",
    "description": "Endpoints"
  }],
  securityDefinitions: {
    bearerAuth: {
      type: "apiKey",
      scheme: "bearer",
      in: "header", // can be "header", "query" or "cookie"
      name: "Authorization", // name of the header, query parameter or cookie
      description: "Token Key"
    }
  },
  definitions: {
    // Reference
    User: {
      name: "Jhon Doe",
      age: 29,
      parents: {
        $ref: '#/definitions/Parents'
      },
      diplomas: [{
        school: "XYZ University",
        year: 2020,
        completed: true,
        internship: {
          hours: 290,
          location: "XYZ Company"
        }
      }]
    },

    GetParam: {
      Module: "getall",
      SessionEmpId: 0,
      body: {
        Id: 0,
      }
    },
    // ----- Master section -------//
    //CarType
    CarTypeBody: {
      Id: 0,
      Code: "Text",
      Catagory: "Text",
      Name: "Text",
      EnName: "Text",
      Description: "Text",
      Status: 0,
    },
    GetCarType: {
      Module: "getall",
      SessionEmpId: 0,
      body: {
        Id: 0,
      },
    },
    PostCarType: {
      Module: "insert",
      SessionEmpId: 0,
      body: {
        $ref: '#/definitions/CarTypeBody'
      },
    },

    //Checkin
    CheckinBody: {
      Id: 0,
      CheckinProfileId: 0,
      Code: "Text",
      VpassSeq: 0,
      ProductMaterialId: 0,
      // CarTypeId: 0,
      VendorId: 0,
      SenderId: 0,
      SenderStatus: 0,
      SenderCode: '0000',
      SenderName: 'name',
      VendorCode: '0000',
      VendorName: 'name',
      ProvinceCode: "A1",
      DistrictCode: "A1B2",
      SubDistrictCode: "A1B2C3",
      Humidity: 0,
      isFastrack: 0,
      isAppropriateRail: 0,
      RailRejectReason: 0,
      isAppropriateTank: 0,
      TankRejectReason: 0,
      isAppropriateCanvas: 0,
      CanvasRejectReason: 0,
      Description: "Text",
      isApproved: 0,
      Status: 0,
    },
    GetCheckin: {
      Module: "getall",
      SessionEmpId: 0,
      PageNo: 1,
      PageSize: 10,
      body: {
        Id: 0,
        CheckinProfileId: 0,
        Plant: "1, 2, 3",
        PlantId: 0,
        ProductTypeId: 0,
        ProductMaterialId: 0,
        CarTypeId: 0,
        SenderId: 0,
        VendorId: 0,
      },
    },
    //GetChenkinMonitor
    GetCheckinMonitor: {
      Module: "getmonitor",
      SessionEmpId: 0,
      PageNo: 1,
      PageSize: 10,
      body: {
        PlantId: 0,
        CarLicensePlate: 'Text',
        DateSearch: '20220523',
      },
    },
    PostCheckin: {
      Module: "insert",
      SessionEmpId: 0,
      body: {
        $ref: '#/definitions/CheckinBody'
      },
    },
    PostCheckinDraining: {
      Module: "GetDrainTime",
      SessionEmpId: 0,
      body: {
        QRData: 'CP:1||VP:V-22-1050-000001'
      },
    },
    PostCheckinDashboard: {
      Module: "GetDashboard",
      SessionEmpId: 0,
      body: {
        Id: 0,
        PlantId: 0
      },
    },

    //CheckinHistory
    CheckinHistoryBody: {
      Id: 0,
      CheckinId: 0,
      StateId: 0,
      Step: 0,
      Status: 0,
    },
    GetCheckinHistory: {
      Module: "getall",
      SessionEmpId: 0,
      PageNo: 1,
      PageSize: 10,
      body: {
        Id: 0,
        CheckinId: 0,
        StateId: 0,
      },
    },
    PostCheckinHistory: {
      Module: "insert",
      SessionEmpId: 0,
      body: {
        $ref: '#/definitions/CheckinHistoryBody'
      },
    },

    //CheckinProfile
    CheckinProfileBody: {
      Id: 0,
      Code: "Text",
      VpassCode: "Text",
      VpassTotalSeq: 0,
      PlantId: 0,
      CarTypeId: 0,
      SenderId: 0,
      StaRegisterCode: "Text",
      NationalCardNumber: "Text",
      FullName: "Text",
      CarLicensePlate: "Text",
      TrailerLicensePlate: "Text",
      isDumper: 0,
      Po: "Text",
      PoItem: "Text",
      PurchaseType: "Text",
      TradeType: "Text",
      ContractNo: "Text",
      SubContractNo: "Text",
      Status: 1,
    },
    GetCheckinProfile: {
      Module: "getall",
      SessionEmpId: 0,
      PageNo: 1,
      PageSize: 10,
      body: {
        Id: 0,
        PlantId: 0,
        CarTypeId: 0,
        SenderId: 0,
        VpassCode: "Code",
      },
    },
    PostCheckinProfile: {
      Module: "insert",
      SessionEmpId: 0,
      body: {
        $ref: '#/definitions/CheckinProfileBody'
      },
    },

    //CheckinProfileVpassInsert
    CheckinProfileVpassInsertBody: {
      Id: 0,
      Code: "Text",
      VpassCode: "Text",
      VpassTotalSeq: 0,
      PlantId: 0,
      CarTypeId: 0,
      VendorId: 0,
      SenderId: 0,
      SenderStatus: 0,
      SenderCode: '0000',
      SenderName: 'name',
      VendorCode: '0000',
      VendorName: 'name',
      StaRegisterCode: "Text",
      NationalCardNumber: "Text",
      FullName: "Text",
      CarLicensePlate: "Text",
      TrailerLicensePlate: "Text",
      isDumper: 0,
      Po: "Text",
      PoItem: "Text",
      PurchaseType: "Text",
      TradeType: "Text",
      ContractNo: "Text",
      SubContractNo: "Text",
      ProductMaterialId: 0,
      Humidity: 0,
      isFastrack: 0,
      isAppropriateRail: 0,
      RailRejectReason: 0,
      isAppropriateTank: 0,
      TankRejectReason: 0,
      isAppropriateCanvas: 0,
      CanvasRejectReason: 0,
      Description: "Text",
      isApproved: 0,
      ProvinceCode: "A1",
      DistrictCode: "A1B2",
      SubDistrictCode: "A1B2C3",
      Status: 1,
    },
    PostCheckinProfileVpassInsert: {
      Module: "vpassinsert",
      SessionEmpId: 0,
      body: {
        $ref: '#/definitions/CheckinProfileVpassInsertBody'
      },
    },

    //EmployeeProfile
    EmployeeProfileBody: {
      Id: 0,
      PlantId: 0,
      EmpCode: "Text",
      ProfileId: "Text",
      Title: "Text",
      FirstName: "Text",
      LastName: "Text",
      TitleEn: "Text",
      FirstNameEn: "Text",
      LastNameEn: "Text",
      PhoneNumber: "Text",
      Position: "Text",
      AccountType: "Text",
      Role: "Text",
      Address: "Text",
      Email: "Text",
      Username: "Text",
      Active: 0,
      StatusId: 0,
      AccessToken: "Text",
      RefreshToken: "Text",
      ExpireDate: "20220505 19:00",
    },
    GetEmployeeProfile: {
      Module: "getall",
      SessionEmpId: 0,
      PageNo: 1,
      PageSize: 10,
      body: {
        Id: 0,
        PlantId: 0,
        EmpCode: 0,
        ProfileId: "Text",
        Name: "Text",
        UserName: "Text",
        StatusId: 0,
        TextSearch1: "Text",
      },
    },
    PostEmployeeProfile: {
      Module: "insert",
      SessionEmpId: 0,
      body: {
        $ref: '#/definitions/EmployeeProfileBody'
      },
    },

    //Plant
    PlantBody: {
      Id: 0,
      Code: 0,
      ProductTypeId: 0,
      PlantSizeId: 0,
      Name: 'text',
      ShortName: 'text',
      CompanyEN: 'text',
      CompanyTH: 'text',
      AddressEN: 'text',
      AddressTH: 'text',
      TelNumber1: 'text',
      TelNumber2: 'text',
      TelNumber3: 'text',
      FaxNumber: 'text',
      RandomQty: 0,
      ReceiveQty: 0,
      AttachFileId: 0,
      AttachFileName: 'text',
      Geographies: 0,
      Description: 'text',
      Status: 0,
    },
    GetPlant: {
      Module: "getall",
      SessionEmpId: 0,
      PageNo: 1,
      PageSize: 10,
      body: {
        Id: 0,
        ProductTypeId: 0,
        PlantSizeId: 0,
        PlantCode: '',
        PlantNodeCode: '',
        PlantName: '',
        Status: 0,
      },
    },
    PostPlant: {
      Module: "insert",
      SessionEmpId: 0,
      body: {
        $ref: '#/definitions/PlantBody'
      },
    },

    //PlantWeightRubberTest
    PlantWeightRubberTestBody: {
      Id: 0,
      isSkipWeightRubberTest: 0,
      WrtDescription: 'text',
      Status: 0,
    },
    GetPlantWeightRubberTest: {
      Module: "getallstr",
      SessionEmpId: 0,
      PageNo: 1,
      PageSize: 10,
      body: {
        Id: 0,
        PlantSizeId: 0,
        PlantCode: '',
        PlantName: '',
        Status: 0,
      },
    },
    PostPlantWeightRubberTest: {
      Module: "updatewrt",
      SessionEmpId: 0,
      body: {
        $ref: '#/definitions/PlantWeightRubberTestBody'
      },
    },

    //PlantWeightRubberTestHistory
    PlantWeightRubberTestHistoryBody: {
      Id: 0,
      PlantId: 0,
      Action: 0,
      Description: "Text",
      Status: 0,
    },
    GetPlantWeightRubberTestHistory: {
      Module: "getall",
      SessionEmpId: 0,
      PageNo: 1,
      PageSize: 10,
      body: {
        Id: 0,
        PlantId: 0,
      },
    },
    PostPlantWeightRubberTestHistory: {
      Module: "insert",
      SessionEmpId: 0,
      body: {
        $ref: '#/definitions/PlantWeightRubberTestHistoryBody'
      },
    },

    //ProductMaterial
    ProductMaterialBody: {
      Id: 0,
      Code: "Text",
      ProductTypeId: 0,
      MaterialType: "Text",
      MaterialCode: "Text",
      Name: "Text",
      Description: "Text",
      Status: 0,
    },
    GetProductMaterial: {
      Module: "getall",
      SessionEmpId: 0,
      body: {
        Id: 0,
        ProductTypeId: 0,
      },
    },
    PostProductMaterial: {
      Module: "insert",
      SessionEmpId: 0,
      body: {
        $ref: '#/definitions/ProductMaterialBody'
      },
    },

    //ProductType
    ProductTypeBody: {
      Id: 0,
      Code: "Text",
      Name: "Text",
      Description: "Text",
      Status: 0,
    },
    GetProductType: {
      Module: "getall",
      SessionEmpId: 0,
      body: {
        Id: 0,
        Name: "Text",
      },
    },
    PostProductType: {
      Module: "insert",
      SessionEmpId: 0,
      body: {
        $ref: '#/definitions/ProductTypeBody'
      },
    },

    //ReadQrCode
    ReadQrCodeBody: {
      readQrCode: "Text",
    },
    GetReadQrCode: {
      Module: "getdata",
      SessionEmpId: 0,
      PageNo: 1,
      PageSize: 10,
      body: {
        qrCode: 'QR:0||SEQ:1||PID:1060||CNO:0||SNO:0||VENS:1||QBL:0||PT:01||SEN:30000696||SENN:nam surname||SENT:0682228918||SUPP:22000006||SUPPN:name surname||M:FLTX001||PRO:TH65||DIS:TH6515||SDIS:TH651501||FT:1||CL:70-3101,80-7392ตง||CLT:01||DUMT:1||PO:3500000001||POI:1||TT:01||DUE:2022-07-05'
      },
    },
    PostReadQrCode: {
      Module: "insert",
      SessionEmpId: 0,
      body: {
        $ref: '#/definitions/ReadQrCodeBody'
      },
    },

    //QueueManagement
    QueueManagementBody: {
      Id: 0,
      Code: "Text",
      CheckinId: 0,
      Order: 0,
      Priority: 0,
      Step: 0,
      Status: 0,
    },
    GetQueueManagement: {
      Module: "getall",
      SessionEmpId: 0,
      PageNo: 1,
      PageSize: 10,
      body: {
        Id: 0,
        CheckinId: 0,
        PlantId: 0,
        ProductTypeId: 0,
        CarTypeId: 0,
        Status: 0,
        CarLicensePlate: 0,
        isDumper: 0,
      },
    },
    PostQueueManagement: {
      Module: "insert",
      SessionEmpId: 0,
      body: {
        $ref: '#/definitions/QueueManagementBody'
      },
    },

    //Sender
    SenderBody: {
      Id: 0,
      Code: "Text",
      VendorId: 0,
      Catagory: "Text",
      Name: "Text",
      Status: 0,
    },
    GetSender: {
      Module: "getall",
      SessionEmpId: 0,
      body: {
        Id: 0,
        VendorId: 0,
      },
    },
    PostSender: {
      Module: "insert",
      SessionEmpId: 0,
      body: {
        $ref: '#/definitions/SenderBody'
      },
    },

    //Slock
    SlockBody: {
      Id: 0,
      Code: "Text",
      PlantId: 0,
      Name: "Text",
      Description: "Text",
      Status: 0,
      isActive: 0,
      isQcActive: 0,
    },
    GetSlock: {
      Module: "getall",
      SessionEmpId: 0,
      body: {
        Id: 0,
        PlantId: 0,
        Name: "Text",
      },
    },
    PostSlock: {
      Module: "insert",
      SessionEmpId: 0,
      body: {
        $ref: '#/definitions/SlockBody'
      },
    },

    //StrContaminant
    StrContaminantBody: {
      Id: 0,
      Code: "Text",
      Name: "Text",
      Description: "Text",
      Status: 0,
      isInternal: 0,
      isExternal: 0,
      isPiece: 0,
      isFragment: 0,
    },
    GetStrContaminant: {
      Module: "getall",
      SessionEmpId: 0,
      PageNo: 1,
      PageSize: 10,
      body: {
        Id: 0,
      },
    },
    PostStrContaminant: {
      Module: "insert",
      SessionEmpId: 0,
      body: {
        $ref: '#/definitions/StrContaminantBody'
      },
    },

    //StrContaminantFound
    StrContaminantFoundBody: {
      Id: 0,
      Code: "Text",
      Name: 0,
      Description: "Text",
      InternalUnit: "Text",
      ExternalUnit: "Text",
      InternalFine: 20.5454,
      ExternalFine: 20.5454,
      InternalContaminantTypeId: 0,
      ExternalContaminantTypeId: 0,
      InternalPriority: 0,
      ExternalPriority: 0,
      Status: 0,
    },
    GetStrContaminantFound: {
      Module: "getall",
      SessionEmpId: 0,
      PageNo: 1,
      PageSize: 10,
      body: {
        Id: 0,
        Name: 0,
        InternalContaminantTypeId: 0,
        ExternalContaminantTypeId: 0,
        Status: 0,
      },
    },
    PostStrContaminantFound: {
      Module: "insert",
      SessionEmpId: 0,
      body: {
        $ref: '#/definitions/StrContaminantFoundBody'
      },
    },

    //StrContaminantType
    StrContaminantTypeBody: {
      Id: 0,
      Code: "Text",
      Name: "Text",
      Description: "Text",
      PriorityId: 0,
      Status: 0,
    },
    GetStrContaminantType: {
      Module: "getall",
      SessionEmpId: 0,
      PageNo: 1,
      PageSize: 10,
      body: {
        Id: 0,
        PriorityId: 0,
      },
    },
    PostStrContaminantType: {
      Module: "insert",
      SessionEmpId: 0,
      body: {
        $ref: '#/definitions/StrContaminantTypeBody'
      },
    },

    //Vendor
    VendorBody: {
      Id: 0,
      Code: "Text",
      Catagory: "Text",
      Name: "Text",
      Status: 0,
    },
    GetVendor: {
      Module: "getall",
      SessionEmpId: 0,
      body: {
        Id: 0,
      },
    },
    PostVendor: {
      Module: "insert",
      SessionEmpId: 0,
      body: {
        $ref: '#/definitions/VendorBody'
      },
    },

    //Weighing
    WeighingBody: {
      Id: 0,
      Code: "Text",
      CheckinId: 0,
      ProductMaterialId: 0,
      BatchSlip: "Text",
      BatchStock: "Text",
      ScaleBill: "Text",
      ScaleNo: "Text",
      TotalPallet: 0,
      GrossWeightIn: 20.5454,
      GrossWeightOut: 20.5454,
      TotalGrossWeight: 20.5454,
      WeightInDateTime: "20221024 09:00",
      WeightInEmpCode: "Text",
      WeightInEmpName: "Text",
      WeightOutDateTime: "20221024 09:00",
      WeightOutEmpCode: "Text",
      WeightOutEmpName: "Text",
      Status: 0,
    },
    GetWeighing: {
      Module: "getall",
      SessionEmpId: 0,
      PageNo: 1,
      PageSize: 10,
      body: {
        Id: 0,
        CheckinProfileId: 0,
        CheckinId: 0,
        ProductMaterialId: 0,
      },
    },
    GetWeighingInfo: {
      Module: "getweightinfo",
      SessionEmpId: 0,
      PageNo: 1,
      PageSize: 10,
      body: {
        QRData: 'CP:0||VP:V-000',
      },
    },
    PostWeighing: {
      Module: "insert",
      SessionEmpId: 0,
      body: {
        $ref: '#/definitions/WeighingBody'
      },
    },
    WeightInBody: {
      CheckinId: 0,
      ProductMaterialId: 0,
      BatchSlip: "Text",
      BatchStock: "Text",
      ScaleBill: "Text",
      ScaleNo: "Text",
      TotalPallet: 0,
      GrossWeightIn: 20.5454,
      WeightInDateTime: "20221024 09:00",
      WeightInEmpCode: "Text",
      WeightInEmpName: "Text",
      Status: 1,
    },
    PostWeightIn: {
      Module: "weightin",
      SessionEmpId: 0,
      body: {
        $ref: '#/definitions/WeightInBody'
      },
    },
    WeightOutBody: {
      CheckinId: 0,
      GrossWeightOut: 20.5454,
      WeightOutDateTime: "20221024 09:00",
      WeightOutEmpCode: "Text",
      WeightOutEmpName: "Text",
      Status: 1,
    },
    PostWeightOut: {
      Module: "weightout",
      SessionEmpId: 0,
      body: {
        $ref: '#/definitions/WeightOutBody'
      },
    },


    //--------Request Section ------//
    //LTX
    LtxStep1Body: {
      Id: 0,
      Code: "Text",
      CheckinId: 0,
      VendorId: 0,
      isFreshLatex: 0,
      isRottenSmell: 0,
      isClumpFormed: 0,
      isContaminated: 0,
      isRottenContaminated: 0,
      isLatexPhysicalPassed: 0,
      isLatexNotOverflow: 0,
      isStirLatex: 0,
      isLatexPackingPassed: 0,
      DRC: 22.5454,
      AssignedToRole: 0,
      AssignedToEmp: 0,
      isApproved: 0,
      RandomnessApproverId: 0,
      isRandomnessApproved: 0,
      RandomnessDescription: "Text",
      ConditionsApproverId: 0,
      isConditionsApproved: 0,
      ConditionsDescription: "Text",
      isQualityBlock: 0,
      isReturn: 0,
      Step: 0,
      Status: 0,
      Description: 0,
    },
    GetLtxStep1: {
      Module: "getall",
      SessionEmpId: 0,
      body: {
        Id: 0,
        CheckinId: 0,
        VendorId: 0,
        AssignedToRole: "0,1,2",
        RandomnessApproverId: 0,
        ConditionsApproverId: 0,
      },
    },
    PostLtxStep1: {
      Module: "insert",
      SessionEmpId: 0,
      body: {
        $ref: '#/definitions/LtxStep1Body'
      },
    },
    LtxStep1UpdateStickerBody: {
        Id: 0,
        isStickerPrinted: 0,
    },
    PostLtxStep1UpdateSticker: {
      Module: "updatesticker",
      SessionEmpId: 0,
      body: {
        $ref: '#/definitions/LtxStep1UpdateStickerBody'
      },
    },

    LtxStep1ConditionBody: {
      Id: 0,
      ReqId: 0,
      EmpId: 0,
      Action: 0,
      Description: "Text",
      Status: 0,
    },
    GetLtxStep1Condition: {
      Module: "getall",
      SessionEmpId: 0,
      body: {
        Id: 0,
      },
    },
    PostLtxStep1Condition: {
      Module: "insert",
      SessionEmpId: 0,
      body: {
        $ref: '#/definitions/LtxStep1ConditionBody'
      },
    },

    LtxStep1RandomnessBody: {
      Id: 0,
      ReqId: 0,
      EmpId: 0,
      Action: 0,
      Description: "Text",
      Status: 0,
    },
    GetLtxStep1Randomness: {
      Module: "getall",
      SessionEmpId: 0,
      body: {
        Id: 0,
      },
    },
    PostLtxStep1Randomness: {
      Module: "insert",
      SessionEmpId: 0,
      body: {
        $ref: '#/definitions/LtxStep1RandomnessBody'
      },
    },

    LtxStep2Body: {
      Id: 0,
      CheckinId: 0,
      VendorId: 0,
      Nh3Value: 0.02,
      isConductivity: 0,
      VfaNumber: 1.1,
      Formalin: 0,
      SummaryTestResult: 0,
      isRottenContaminated: 0,
      isLatexNotOverflow: 0,
      isStirLatex: 0,
      RandomnessApproverId: 0,
      isRandomnessApproved: 0,
      RandomnessDescription: "Text",
      ConditionsApproverId: 0,
      isConditionsApproved: 0,
      ConditionsDescription: "Text",
      isQualityBlock: 0,
      isReturn: 0,
      Step: 0,
      Status: 0,
      Description: 0,
    },
    GetLtxStep2: {
      Module: "getall",
      SessionEmpId: 0,
      body: {
        Id: 0,
      },
    },
    PostLtxStep2: {
      Module: "insert",
      SessionEmpId: 0,
      body: {
        $ref: '#/definitions/LtxStep2Body'
      },
    },

    LtxStep3Body: {
      Id: 0,
      CheckinId: 0,
      VendorId: 0,
      SlockId: 0,
      isTightLid: 0,
      isTankNotDamaged: 0,
      isNoAdditionalTankExtend: 0,
      isNoWaterInHose: 0,
      isValveNoLeaks: 0,
      isNoOldRubber: 0,
      isGoodStirringBaffle: 0,
      isResultApproved: 0,
      Description: "Text",
      RandomnessApproverId: 0,
      isRandomnessApproved: 0,
      RandomnessDescription: "Text",
      ConditionsApproverId: 0,
      isConditionsApproved: 0,
      ConditionsDescription: "Text",
      isQualityBlock: 0,
      isReturn: 0,
      Step: 0,
      Status: 0,
    },
    GetLtxStep3: {
      Module: "getall",
      SessionEmpId: 0,
      body: {
        Id: 0,
      },
    },
    PostLtxStep3: {
      Module: "insert",
      SessionEmpId: 0,
      body: {
        $ref: '#/definitions/LtxStep3Body'
      },
    },
    LtxStep3UpdateStickerBody: {
        Id: 0,
        isStickerPrinted: 0,
    },
    PostLtxStep3UpdateSticker: {
      Module: "updatesticker",
      SessionEmpId: 0,
      body: {
        $ref: '#/definitions/LtxStep3UpdateStickerBody'
      },
    },
    PostLtxInterface: {
      Module: "UpdateDRC",
      SessionEmpId: 0,
      body: {
        StickerList: [{
          BatchNo: "10302208210134",
          DRC: 60.5
        }]
      },
    },
    RssBeforeBody: {
      Id: 0,
      CheckinId: 0,
      VendorId: 0,
      MaterialConId: 0,
      PackingId: 0,
      VehicleConId: 0,
      EstimatedWeight: 0,
      Result: 0,
      Description: "string",
      DocumentRef: "string",
      StatusId: 0,
    },
    GetRssBefore: {
      Module: "getall",
      SessionEmpId: 0,
      body: {
        Id: 0,
        CheckinId: 0,
      },
    },
    PostRssBefore: {
      Module: "insert",
      SessionEmpId: 0,
      body: {
        $ref: '#/definitions/RssBeforeBody'
      },
    },

    //STR
    StrQcAfterWeightStep1Body: {
      Id: 0,
      Code: "Text",
      CheckinId: 0,
      SlockId: 0,
      ProductMaterialId: 0,
      RubberCharacterId: 0,
      TotalRandomCut: 0,
      CutGradeA: 0,
      CutGradeB: 0,
      CutGradeC: 0,
      SummaryCutSampleGrade: "Text",
      AssignedToRole: 0,
      AssignedToEmp: 0,
      Step: 0,
      Status: 0,
    },
    GetStrQcAfterWeightStep1: {
      Module: "getall",
      SessionEmpId: 0,
      PageNo: 1,
      PageSize: 10,
      body: {
        Id: 0,
        CheckinId: 0,
        SlockId: 0,
        ProductMaterialId: 0,
        RubberCharacterId: 0,
      },
    },
    PostStrQcAfterWeightStep1: {
      Module: "insert",
      SessionEmpId: 0,
      body: {
        $ref: '#/definitions/StrQcAfterWeightStep1Body'
      },
    },
    StrQcAfterWeightStep2Body: {
      Id: 0,
      Code: "Text",
      CheckinId: 0,
      ReqId: 0,
      TotalRandomToluene: 0,
      FoundWornSampleAdded: 0,
      FoundWornSamplePass: 0,
      FoundWornSampleTFound: 0,
      FoundWornSampleDecadentFound: 0,
      DeadRubberWeight: 20.5454,
      DecadentRubberWeight: 20.5454,
      TolueneTestResult: 0,
      isTestPassed: 0,
      isQualityBlock: 0,
      AssignedToRole: 0,
      AssignedToEmp: 0,
      Status: 0,
    },
    GetStrQcAfterWeightStep2: {
      Module: "getall",
      SessionEmpId: 0,
      PageNo: 1,
      PageSize: 10,
      body: {
        Id: 0,
        ReqId: 0,
      },
    },
    PostStrQcAfterWeightStep2: {
      Module: "insert",
      SessionEmpId: 0,
      body: {
        $ref: '#/definitions/StrQcAfterWeightStep2Body'
      },
    },
    StrQcAfterWeightStep2TolueneTestBody: {
      Id: 0,
      Code: "Text",
      StepId: 0,
      RubberShapeId: 0,
      ColorId: 0,
      TolueneTestId: 0,
      DecisionResult: "Text",
      Status: 0,
    },
    GetStrQcAfterWeightStep2TolueneTest: {
      Module: "getall",
      SessionEmpId: 0,
      PageNo: 1,
      PageSize: 10,
      body: {
        Id: 0,
        StepId: 0,
        RubberShapeId: 0,
        ColorId: 0,
        TolueneTestId: 0,
      },
    },
    PostStrQcAfterWeightStep2TolueneTest: {
      Module: "insert",
      SessionEmpId: 0,
      body: {
        $ref: '#/definitions/StrQcAfterWeightStep2TolueneTestBody'
      },
    },

    StrQcAfterWeightStep3Body: {
      Id: 0,
      Code: "Text",
      CheckinId: 0,
      ReqId: 0,
      TotalRandomSulphate: 0,
      SulphateTestResult: 0,
      Status: 0,
    },
    GetStrQcAfterWeightStep3: {
      Module: "getall",
      SessionEmpId: 0,
      PageNo: 1,
      PageSize: 10,
      body: {
        Id: 0,
        ReqId: 0,
      },
    },
    PostStrQcAfterWeightStep3: {
      Module: "insert",
      SessionEmpId: 0,
      body: {
        $ref: '#/definitions/StrQcAfterWeightStep3Body'
      },
    },

    StrQcAfterWeightStep3SulphateTestBody: {
      Id: 0,
      Code: "Text",
      StepId: 0,
      SolutionResultId: 0,
      TestSummary: "Text",
      Status: 0,
    },
    GetStrQcAfterWeightStep3SulphateTest: {
      Module: "getall",
      SessionEmpId: 0,
      PageNo: 1,
      PageSize: 10,
      body: {
        Id: 0,
        StepId: 0,
        SolutionResultId: 0,
      },
    },
    PostStrQcAfterWeightStep3SulphateTest: {
      Module: "insert",
      SessionEmpId: 0,
      body: {
        $ref: '#/definitions/StrQcAfterWeightStep3SulphateTestBody'
      },
    },

    StrQcAfterWeightStep4Body: {
      Id: 0,
      Code: "Text",
      CheckinId: 0,
      ReqId: 0,
      isContaminantFound: 0,
      TotalStandardFine: 20.5454,
      FineDiscount: 20.5454,
      ActualFine: 20.5454,
      isRequestDiscount: 0,
      DiscountEmpId: 0,
      isDiscountApproved: 0,
      ReturnLataxWeight: 20.5454,
      ReturnLataxWeightPercentage: 20.5454,
      isFinesAccepted: 1,
      isQualityBlock: 0,
      Status: 0,
    },
    GetStrQcAfterWeightStep4: {
      Module: "getall",
      SessionEmpId: 0,
      PageNo: 1,
      PageSize: 10,
      body: {
        Id: 0,
        ReqId: 0,
        DiscountEmpId: 0,
      },
    },
    PostStrQcAfterWeightStep4: {
      Module: "insert",
      SessionEmpId: 0,
      body: {
        $ref: '#/definitions/StrQcAfterWeightStep4Body'
      },
    },

    //GetStrQcAfterWeightStep4Approval
    GetStrQcAfterWeightStep4ApprovalBody: {
      Id: 0,
      ReqId: 0,
      EmpId: 0,
      Action: 0,
      Description: "Text",
      Status: 0,
    },
    GetStrQcAfterWeightStep4Approval: {
      Module: "getbyreqid",
      SessionEmpId: 0,
      PageNo: 1,
      PageSize: 10,
      body: {
        Id: 0,
        ReqId: 0,
        EmpId: 0,
      },
    },
    PostStrQcAfterWeightStep4Approval: {
      Module: "insert",
      SessionEmpId: 0,
      body: {
        $ref: '#/definitions/GetStrQcAfterWeightStep4ApprovalBody'
      },
    },

    StrQcAfterWeightStep4ContaminantCheckBody: {
      Id: 0,
      Code: "Text",
      StepId: 0,
      ContaminantItem: 0,
      isContaminantOther: 0,
      ContaminantOtherName: "Text",
      ContaminantFound: 0,
      ContaminantColor: 0,
      ContaminantShape: 0,
      ContaminantSize: 0,
      isInOutSize: 0,
      isCompletePiece: 0,
      StandardFineUnit: 20.5454,
      StandardFine: 20.5454,
      ActualFine: 20.5454,
      PersonalOrTeam: 1,
      Status: 0,
    },
    GetStrQcAfterWeightStep4ContaminantCheck: {
      Module: "getall",
      SessionEmpId: 0,
      PageNo: 1,
      PageSize: 10,
      body: {
        Id: 0,
        StepId: 0,
      },
    },
    PostStrQcAfterWeightStep4ContaminantCheck: {
      Module: "insert",
      SessionEmpId: 0,
      body: {
        $ref: '#/definitions/StrQcAfterWeightStep4ContaminantCheckBody'
      },
    },

    StrQcAfterWeightStep4ContaminantCheckEmployeeBody: {
      Id: 0,
      Code: "Text",
      ReqId: 0,
      QcContaminantId: 0,
      EmpId: 0,
      Status: 0,
    },
    GetStrQcAfterWeightStep4ContaminantCheckEmployee: {
      Module: "getall",
      SessionEmpId: 0,
      PageNo: 1,
      PageSize: 10,
      body: {
        Id: 0,
        ReqId: 0,
        QcContaminantId: 0,
        EmpId: 0,
      },
    },
    PostStrQcAfterWeightStep4ContaminantCheckEmployee: {
      Module: "insert",
      SessionEmpId: 0,
      body: {
        $ref: '#/definitions/StrQcAfterWeightStep4ContaminantCheckEmployeeBody'
      },
    },

    RandomPlanBody: {
      Id: 0,
      Code: '',
      Name: '',
      RandomPlanId: 0,
      PlantId: 0,
      StatusId: 0,
    },
    GetRandomPlan: {
      Module: "getall",
      SessionEmpId: 0,
      PageNo: 1,
      PageSize: 10,
      body: {
        $ref: '#/definitions/RandomPlanBody'
      },
    },
    PostRandomPlan: {
      Module: "insert",
      SessionEmpId: 0,
      body: {
        $ref: '#/definitions/RandomPlanBody'
      },
    },
    AcceptanceRateBody: {
      Id: 0,
      Code: '',
      PlantId: 0,
      AcceptanceNegative: 0,
      AcceptancePositive: 0,
      ValueNegative: 0,
      ValuePositive: 0,
      StatusId: 0,
    },
    GetAcceptanceRate: {
      Module: "getall",
      SessionEmpId: 0,
      PageNo: 1,
      PageSize: 10,
      body: {
        $ref: '#/definitions/AcceptanceRateBody'
      },
    },
    PostAcceptanceRate: {
      Module: "insert",
      SessionEmpId: 0,
      body: {
        $ref: '#/definitions/AcceptanceRateBody'
      },
    },
    MultiplyFactorBody: {
      Id: 0,
      Code: '',
      PlantId: 0,
      WeightBefore: 0.0,
      WeightAfterFrom: 0.0,
      WeightAfterTo: 0.0,
      Multiply: 0.0,
      PerGen: 0.0,
      StatusId: 0,
    },
    GetMultiplyFactor: {
      Module: "getall",
      SessionEmpId: 0,
      PageNo: 1,
      PageSize: 10,
      body: {
        Id: 0,
        PlantCode: '',
        PlantName: '',
        StatusId: 0,
      },
    },
    PostMultiplyFactor: {
      Module: "insert",
      SessionEmpId: 0,
      body: {
        $ref: '#/definitions/MultiplyFactorBody'
      },
    },
    WeightBeforePressingBody: {
      Id: 0,
      Code: '',
      PlantId: 0,
      Weight: 0.0,
      StatusId: 0,
    },
    GetWeightBeforePressing: {
      Module: "getall",
      SessionEmpId: 0,
      PageNo: 1,
      PageSize: 10,
      body: {
        Id: 0,
        PlantId: 0,
        StatusId: 0,
      },
    },
    PostWeightBeforePressing: {
      Module: "insert",
      SessionEmpId: 0,
      body: {
        $ref: '#/definitions/WeightBeforePressingBody'
      },
    },
    StrDrcWeightTestBody: {
      Id: 0,
      ReqId: 0,
      BarcodeNo: '',
      Weight: 0,
      CLConditionId: 0,
      CLConditionValue: 0,
      StatusId: 0,
    },
    StrDRCBody: {
      Id: 0,
      Code: '',
      ReqId: 0,
      CheckinId: 0,
      MaterialId: 0,
      BatchSlip: '',
      Province: 0,
      District: 0,
      SubDistrict: 0,
      DrainCheck: 0,
      BatchSloc: 0,
      Sloc: 0,
      Lump: 0,
      Cup: 0,
      MaterialMixed: 0,
      Crep: 0,
      Rubber: 0,
      Wood: 0,
      GradeMixed: 0,
      Dry: 0,
      Damp: 0,
      Freash: 0,
      LevelMixed: 0,
      DeductWeight: 0,
      DeductWater: 0,
      DeductWood: 0,
      AssessmentResults: 0,
      DRCVisual: 0,
      DRCTest: 0,
      DRCResult: 0,
      DRCApproval: 0,
      MaxDRCApproval: 0,
      isWeightRubberTest: 0,
      isSkipRubberTest: 0,
      isSkipRubberTestApproved: 0,
      isSkipDrcApproved: 0,
      AssignedToRole: 0,
      AssignedToEmp: 0,
      Description: 'Text',
      StatusId: 0,
      Remark: '',
      WeightTest: [{
        $ref: '#/definitions/StrDrcWeightTestBody'
      }]
    },
    GetStrDRC: {
      Module: "getall",
      SessionEmpId: 0,
      PageNo: 1,
      PageSize: 10,
      body: {
        Id: 0,
        ReqId: 0,
        CheckinId: 0
      },
    },
    PostStrDRC: {
      Module: "insert",
      SessionEmpId: 0,
      body: {
        $ref: '#/definitions/StrDRCBody'
      },
    },
    //StrDrcAfterWeight
    StrDrcApprovalBody: {
      Id: 0,
      ReqId: 0,
      EmpId: 0,
      Action: 0,
      Description: "Text",
      Status: 0,
    },
    GetStrDrcApproval: {
      Module: "getall",
      SessionEmpId: 0,
      PageNo: 1,
      PageSize: 10,
      body: {
        Id: 0,
        ReqId: 0,
        EmpId: 0,
      },
    },
    PostStrDrcApproval: {
      Module: "insert",
      SessionEmpId: 0,
      body: {
        $ref: '#/definitions/StrDrcApprovalBody'
      },
    },
    PostStrDRCInterface: {
      Module: "GetWeightBySampleNo",
      SessionEmpId: 0,
      body: {
        Id: 0,
        ReqId: 0,
        SampleNo: '',
        Req_ID: 0,
        Weight_After: 0,
        EmpCode: "99990000",
      },
    },
    GetDeductInterface: {
      Module: "getdeduct",
      SessionEmpId: 0,
      body: {
        CheckinProfileId: 0,
        PlantId: 0, //Optional
        CheckinId: 0 //Optional
      },
    },
    GetDropdown: {
      Module: "getall",
      SessionEmpId: 0,
      body: {
        Id: 0,
        Text: "",
        Type: 0,
        TypeName: "",
        StatusId: 0,
        TextSearch1: "",
        TextSearch2: "",
        TextSearch3: "",
        TextSearch4: "",
        TextSearch5: "",
      },
    },
    GetProvince: {
      Module: "getall_province",
      SessionEmpId: 0,
      body: {
        Id: 0,
        Code: "",
      },
    },
    AttachBody: {
      AttachID: 0,
      ReqID: 0,
      CusID: 0,
      SeqID: 0,
      Year: '',
      Month: '',
      ProductID: '',
      Form: '',
      PathFull: '',
      RootPath: '',
      PathName: '',
      FileName: '',
      Extention: '',
      SELLER_TAX_ID: '',
      DOCUMENT_ID: '',
      DOCUMENT_TYPE_CODE: '',
    },
    GetAttach: {
      Module: "GetFile",
      SessionEmpId: 0,
      body: {
        AttachID: 0,
        ReqID: 0,
        Form: '',
      },
    },
    PostAttach: {
      Module: "Insert",
      SessionEmpId: 0,
      body: {
        $ref: '#/definitions/AttachBody'
      },
    },
    MaterialConditionBody: {
      Id: 0,
      PlanCode: '',
      TypeId: 0,
      Name: 0,
      Description: 0,
      ResultId: 0,
      ConditionId: 0,
      StatusId: 0,
    },
    GetMaterialCondition: {
      Module: "getall",
      SessionEmpId: 0,
      PageNo: 1,
      PageSize: 10,
      body: {
        Id: 0,
        PlanCode: '',
        TypeId: 0,
        ConditionId: 0,
        StatusId: 0,
      },
    },
    PostMaterialCondition: {
      Module: "Insert",
      SessionEmpId: 0,
      body: {
        $ref: '#/definitions/MaterialConditionBody'
      },
    },
    EmpRoleBody: {
      Id: 0,
      EmpId: 0,
      EmpCode: 0,
      PlantId: 0,
      RoleId: 0,
      RoleHeadId: 0,
      StatusId: 0,
    },
    GetPermission: {
      Module: "GetAllRole",
      SessionEmpId: 0,
      PageNo: 1,
      PageSize: 10,
      body: {
        Id: 0,
        RoleId: 0,
        PlantId: 0,
        Name: '',
        StatusId: 0,
      },
    },
    PostPermission: {
      Module: "UpdateEmpRoleGroup",
      SessionEmpId: 0,
      PageNo: 1,
      PageSize: 10,
      body: {
        Id: 0,
        RoleId: 0,
        PlantId: 0,
        StatusId: 0,
        EmpTable: [{
          $ref: '#/definitions/EmpRoleBody'
        }],
      },
    },
    DrainTimeBody: {
      Id: 0,
      Code: '',
      PlantId: 0,
      CarTypeId: 0,
      DateStart: '2022-07-05',
      DateTo: '2022-07-10',
      DrainTime: '30',
      StatusId: 1,
    },
    GetDrainTime: {
      Module: "getall",
      SessionEmpId: 0,
      PageNo: 1,
      PageSize: 10,
      body: {
        Id: 0,
        PlantId: 0,
        StatusId: 0,
        CarTypeId: 0,
      },
    },
    PostDrainTime: {
      Module: "insert",
      SessionEmpId: 0,
      body: {
        $ref: '#/definitions/DrainTimeBody'
      }
    },
    BatchBody: {
      Id: 0,
      PlantId: 0,
      Batch: '',
      Description: '',
      IsActive: 0,
      IsDefault: 0,
      StatusId: 0,
    },
    GetBatch: {
      Module: "getall",
      SessionEmpId: 0,
      PageNo: 1,
      PageSize: 10,
      body: {
        Id: 0,
        PlantId: 0,
        Batch: '',
        IsActive: 0,
        IsDefault: 0,
        StatusId: 0,
      },
    },
    PostBatch: {
      Module: "insert",
      SessionEmpId: 0,
      body: {
        $ref: '#/definitions/BatchBody'
      }
    },
    SatisfactionBody: {
      Id: 0,
      CheckinId: 0,
      VendorId: 0,
      SenderId: 0,
      SatisfactionId: 0,
    },
    GetSatisfaction: {
      Module: "GetSatisfaction",
      SessionEmpId: 0,
      PageNo: 1,
      PageSize: 10,
      body: {
        $ref: '#/definitions/SatisfactionBody'
      },
    },
    PostSatisfaction: {
      Module: "Insert",
      SessionEmpId: 0,
      body: {
        $ref: '#/definitions/SatisfactionBody'
      },
    },
    GetBannerKiosk: {
      Module: "GetAll",
      SessionEmpId: 0,
      PageNo: 1,
      PageSize: 10,
      body: {
        Id: 0,
        Name: '',
        StatusId: 0
      },
    },
    PostBannerKiosk: {
      Module: "Insert",
      SessionEmpId: 0,
      body: {
        Id: 0,
        Name: '',
        OrderNumber: 0,
        AttachId: 0,
        ImgName: '',
        StatusId: '',
      },
    },
    GetWorklistBody: {
      Id: 0,
      DateFrom: '',
      DateTo: '',
      PlantId: 0,
      RMType: 0,
      RequestNo: '',
      StatusId: 0,
      Role: '1,2',
      Plant: '1,2',
      PlantCode: '1020',
      VendorCode: '',
      VendorName: '',
      SenderCode: '',
      SenderName: '',
      DriverName: '',
      MemberName: '',
      CarLicence: '',
      Inspector: '',
    },
    GetWorklist: {
      Module: "gettodolist",
      SessionEmpId: 0,
      PageNo: 1,
      PageSize: 10,
      body: {
        $ref: '#/definitions/GetWorklistBody'
      },
    },
    GetMainMenu: {
      Module: "GetAll",
      SessionEmpId: 0,
      PageNo: 1,
      PageSize: 10,
      body: {
        Id: 0,
        ParentId: 0,
        Name: '',
        Permissions: '',
        NewTabId: 0,
        StatusId: 0,
      },
    },
    PostMainMenu: {
      Module: "Insert",
      SessionEmpId: 0,
      body: {
        Id: 0,
        Name: '',
        ParentId: 0,
        Url: '',
        Icon: '',
        OrderNum: 0,
        Permissions: '',
        NewTabId: 0,
        StatusId: 0,
      },
    },
    GetContaminantFound: {
      Module: "GetAll",
      SessionEmpId: 0,
      PageNo: 1,
      PageSize: 10,
      body: {
        Id: 0,
      },
    },
    GetSlipFooter: {
      Module: "GetAll",
      SessionEmpId: 0,
      PageNo: 1,
      PageSize: 10,
      body: {
        Id: 0,
        Title: '',
        Text: '',
        StatusId: 0,
      },
    },
    PostSlipFooter: {
      Module: "Insert",
      SessionEmpId: 0,
      body: {
        Id: 0,
        Title: '',
        Text: '',
        StatusId: 0,
      },
    },
    GetStrContaminantFines: {
      Module: "GetAll",
      SessionEmpId: 0,
      PageNo: 1,
      PageSize: 10,
      body: {
        Id: 0,
        Name: '',
        Contaminant: 0,
        Amount: 0,
        ExternalAmount: 0,
        UnitName: '',
        Priority: 0,
        StatusId: 0,
      },
    },
    PostStrContaminantFines: {
      Module: "Insert",
      SessionEmpId: 0,
      body: {
        Id: 0,
        Name: '',
        Contaminant: 0,
        Amount: 0,
        ExternalAmount: 0,
        UnitName: '',
        Priority: 0,
        StatusId: 0,
      },
    },
    GetRssContaminantFines: {
      Module: "GetAll",
      SessionEmpId: 0,
      PageNo: 1,
      PageSize: 10,
      body: {
        Id: 0,
        Name: '',
        Contaminant: 0,
        Amount: 0,
        UnitName: '',
        Priority: 0,
        StatusId: 0,
      },
    },
    PostRssContaminantFines: {
      Module: "Insert",
      SessionEmpId: 0,
      body: {
        Id: 0,
        Name: '',
        Contaminant: 0,
        Amount: 0,
        UnitName: '',
        Priority: 0,
        StatusId: 0,
      },
    },
    GetAdminManagement: {
      Module: "GetAll",
      SessionEmpId: 0,
      PageNo: 1,
      PageSize: 10,
      body: {
        Id: 0,
        DateFrom: '',
        DateTo: '',
        PlantId: 0,
        RMType: 0,
        RequestNo: '',
        StatusId: 0,
        VendorCode: '',
        VendorName: '',
        SenderCode: '',
        SenderName: '',
        MemberName: '',
        CarLicence: '',
        Inspector: '',
      },
    },
    GetRssAfterStep1: {
      Module: "GetAll",
      SessionEmpId: 0,
      PageNo: 1,
      PageSize: 10,
      body: {
        Id: 0,
        ReqId: 0,
      },
    },
    PostRssAfterStep1: {
      Module: "Insert",
      SessionEmpId: 0,
      body: {
        Id: 0,
        ReqId: 0,
        ParkingId: 0,
        PanelQty: 0,
        Remark: 0,
        ResultId: 0,
        StatusId: 0,
      },
    },
    GetRssAfterStep2: {
      Module: "GetAll",
      SessionEmpId: 0,
      PageNo: 1,
      PageSize: 10,
      body: {
        Id: 0,
        ReqId: 0,
        PanelId: 0,
      },
    },
    PostRssAfterStep2: {
      Module: "InserUpdate",
      SessionEmpId: 0,
      body: {
        Id: 0,
        ReqId: 0,
        PanelId: 0,
        Number: 0,
        Height: 0,
        HeightId: 0,
        Thickness: 0,
        ThicknessId: 0,
        PlasticCoveringId: 0,
        AppearanceCheckId: 0,
        Amount: 0,
        DefectId: 0,
        Qty: 0,
        ResultId: 0,
        StatusId: 0,
        DefectTable: [{
          Id: 0,
          ReqId: 0,
          PanelId: 0,
          Number: 0,
          DefectId: 0,
          ResultId: 0,
          Qty: 0,
          StatusId: 0,
        }],
      },
    },
    GetRssAfterStep3: {
      Module: "GetAll",
      SessionEmpId: 0,
      PageNo: 1,
      PageSize: 10,
      body: {
        Id: 0,
        ReqId: 0,
      },
    },
    PostRssAfterStep3: {
      Module: "Insert",
      SessionEmpId: 0,
      body: {
        Id: 0,
        ReqId: 0,
        DRC_USS: 0,
        Spec_USS: 0,
        DRC_RSS: 0,
        Spec_RSS: 0,
        ResultId: 0,
        StatusId: 0,
      },
    },
    GetRssAfterStep4: {
      Module: "GetAll",
      SessionEmpId: 0,
      PageNo: 1,
      PageSize: 10,
      body: {
        Id: 0,
        ReqId: 0,
      },
    },
    PostRssAfterStep4: {
      Module: "Insert",
      SessionEmpId: 0,
      body: {
        Id: 0,
        ReqId: 0,
        WeightReturn: 0,
        PersentReturn: 0,
        Fines: 0,
        FinesDiscount: 0,
        ActualFine: 0,
        OtherFines: 0,
        TotalActualFines: 0,
        TruckConditionId: 0,
        DriverOutfitId: 0,
        DriverPunctuality: 0,
        SafetyId: 0,
        EnvironmentId: 0,
        IsApproveRequest: 0,
        IsSeparate: 0,
        IsDowngrade: 0,
        IsOther: 0,
        Description: 'Text',
        OtherRemark: '',
        ReqFines: 0,
        ApproverId: 0,
        IsApproved: 0,
        ResultId: 0,
        StatusId: 0,
      },
    },
    //RssAfterWeightStep4Approval
    RssAfterWeightStep4ApprovalBody: {
      Id: 0,
      ReqId: 0,
      EmpId: 0,
      Action: 0,
      Description: "Text",
      Status: 0,
    },
    GetRssAfterWeightStep4Approval: {
      Module: "getall",
      SessionEmpId: 0,
      PageNo: 1,
      PageSize: 10,
      body: {
        Id: 0,
        ReqId: 0,
        EmpId: 0,
      },
    },
    PostRssAfterWeightStep4Approval: {
      Module: "insert",
      SessionEmpId: 0,
      body: {
        $ref: '#/definitions/RssAfterWeightStep4ApprovalBody'
      },
    },
  },
}

const outputFile = './src/swagger-output.json'
const endpointsFiles = ['./src/app.js']

swaggerAutogen(outputFile, endpointsFiles, doc)