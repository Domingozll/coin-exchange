export const m = {
  navheader:{
    home:'数字货币交易平台',
		homeMenu: "首頁",
    trade:"幣幣交易",
    exchange:"創新交易",
    c2c:"場外交易",
    assets:'資產管理',
    accountAssets:"賬戶資產",
    addressManagement:"提幣地址管理",
    order:'訂單',
    usercenter:'個人中心',
    signin:"登錄",
    signup:"註冊",
    signout:"退出",
    language:"語言",
    entrustRecord:"委託記錄",
    turnoverRecord:"成交記錄",
    rechargeRecord:"充值記錄",
    withdrawRecord:"提幣記錄"
  },
  footer:{
    notice:"本站公告",
    about:"關於我們",
    api:"API文檔",
    apply:"上幣申請",
    help:"帮助中心",
    order:"工單系統",
    rate:"費率說明",
    term:"服務協議",
    contact:'聯繫我們',
    site:'本站公告',
		putAway:'收起'
  },
  trade:{
    buy:"買入",
    sell:"賣出",
    washSale:'自買自賣',
    balance:"餘額",
    maxBuy:"可買量",
    price:"買入價",
    amount:"買入量",
    sellPrice:"賣出價",
    sellAmount:"賣出量",
    maxSell:"可賣量",
    estimated:"預計交易額",
    entrustHistory:"歷史委託",
    uncompletedEntrust:"未完成委託",
    lowPrice:"最低價",
    highPrice:"最高價",
    volume:"24小時交易量",
    levels:"檔位",
    topPrice:"價格",
    entrustNum:"委託量",
    time:"時間",
    topVolume:"成交量",
    entrustTime:"委託時間",
    entrustType:"類型",
    entrustPrice:"委託價格",
    entrustAmount:"委託數量",
    totalEntrust:"委託總額",

    totalDealEntrust:"成交委託總額",
    entrustStatus:"狀態",
    entrustOperate:"操作",
    cancel:"撤銷",
    transTime:"成交時間",
    transType:"類型",
    transTypeMap:{
      1:"買入",
      2:"賣出"
    },
    transPrice:"價格",
    transAvgPrice:"成交均價",
    transVolume:"成交數量",
    actualTransVolume:"實際成交數量",
    totalTrans:"成交總額",
    totalDealTrans:"實際成交總額",
    transStatus:"狀態",
    transStatusMap:{
      0:"待成交",
      1:"已成交",
      2:"撤銷",
      3:"異常"
    },
    market:"市場",
    volume24hr:"24h成交量",
    change24hr:"24h漲跌",
    maxTradeSellNum:"單筆委託最大賣出量為 ",
    maxTradeBuyNum:"單筆委託最大賣入量為 ",
    fold:"折疊圖表 ↑",
    unfold:"展開圖表 ↓",
    cancelHint:"確定撤銷訂單?",
    mergeDepth: "合並深度",
    entrustSuccess:"委託成功！",
    coinStatus:{
      0:'待入帳',
      1:'充值失敗',
      2:'到賬失敗',
      3:'到賬成功',
    },
    confirm:'確認中，還需等待',
    confirmNumber:'個確認數',
    withdrawStatusMap:{
      0:"審核中",
      1:"轉出成功",
      2:"拒絕",
      3:"撤銷",
      4:"審核通過",
      5:"打幣成功",
    },
    plzEnterPriceAndAmount: "請填寫有效的價格和數量！",
    maxBuyAmountError: "買入量已超過系統最大值！",
    minBuyAmountError: "買入量低於系統最小值！",
    maxSellAmountError: "賣出量已超過系統最大值！",
    minSellAmountError: "賣出量低於系統最小值！",
  },
  home:{
    sign:"登錄 / 註冊",
    trade:"開始交易",
    homeTitle:"尋找優質幣種",
    homeDesc:"支持百萬級訪問 資產500萬以上用戶12萬+",
    tradePairs:"交易對",
    price:"價格",
		minPrice: "最低價",
		maxPrice: "最高價",
    volume:"交易量",
    turnoverAmount:"總交易額",
    change:"日漲跌",
		safe: "安全保障",
		safeDesc: "5 年数字资产金融服务经验，专业分布式架构和防 DDOS 攻击系统，多重加密机制，多层保障策略，全方位保护用户资金安全",
		auth: "审计认证",
		authDesc: "无偏性零知识订单加密，定期外部审计，严格把控交易平台合规安全，建立先行赔付机制，设立投资者保护基金",
		stable: "高效稳定",
		stableDesc: "多层、多集群系统架构，安全稳定运营超过5年，微秒级高效撮合引擎，证券级先进算法，提供专业量化支持",
		lightTitle: "全球领先的数字资产金融服务商",
		lightTitleDesc: "为全球用户提供安全、可信赖的数字资产交易及资产管理服务",
		siteTitle: "值得信赖的数字资产交易平台",
		siteTitleDesc: "安全  |  稳定  |  高效"
  },
  // 創新交易
  exchange:{
    positionDetails:"持倉明細",
    positionSummary:"持倉匯總",
    positionDirection:"持倉方向",
    openToday:"平倉記錄",
    entrustToday:"今日委託記錄",
    dealToday:"成交記錄",
    bookBalance:"賬面餘額",
    profit:"持倉盈虧",
    totalProfit:"總盈虧",
    occupancyMargin:"佔用保證金",
    availableMargin:"可用保證金",
    product:"產品",
    currentPrice:"當前價格",
    operate:"操作",
    point:"點",
    orderID:"訂單編號",
    market:"品種",
    business:"買賣",
    amount:"數量",
    openPrice:"開倉價",
    openTime:"開倉時間",
    openAmount:"開倉量",
    closeAmount:"平倉量",
    fee:"手續費",
    direction:"平倉類型",
    closePosition:"平倉",
    closeTime:"平倉時間",
    entrustType:"委託類型",
    entrustTime:"委託時間",
    entrustPrice:"委託價格",
    averagePrice:"持倉均價",
    openOrderId:"開倉單號",
    closeOrderId:"平倉單號",
    priceRange:"觸發價位距離",
    unlockMargin:"返還保證金",
    marketBuy:"現價買入",
    marketSell:"現價賣出",
    fixedBuy:"限價買入",
    fixedSell:"限價賣出",
    cancel:"撤單",
    deal:"已成交",
    canceled:"已撤銷",
    abnormal:"異常單",
    averageTransPrice:"成交均價",
    whetherCancelOrder:"是否撤單？",
    cancelOrderCallback:"撤單成功！",
    closeProfit:"平倉盈虧",
    closePrice:"平倉價",
    buying:"買入",
    selling:"賣出",
    donePrice:"成交價",
    doneTime:"成交時間",
    buySell:"買/賣",
    transType:"成交類型",
    marketPrice:"市價",
    fixedPrice:"限價",
    price:"價格",
    deposit:"保證金要求",
    confirmTheOrder:"確定下單",
    recoverPassword:"找回登錄密碼",
    confirmOrder: "訂單確認",
    plzRightPrice:"請輸入正確的價格",
    plzRightAmount: "請輸入正確的數量",
    plzEnterMargin: "請輸入保證金",
  },
  // plz 是please的縮寫
  userCenter:{
    googleTips:{
      0:"在手机上下载安装“Google Authenticator (身份验证器)",
      1:"在“验证器”应用程序中，点击“添加新账户 (iOS 下是 + 号)”，然后选择“扫描条形码”",
      2:"扫描左侧条形码，输入Google验证码，完成认证",
      3:"如果您无法扫描成功上图的条形码，您还可以手动添加账户，并输入如下密匙："
    },
    openGaSuccess:"开启google认证成功",
    closeGaSuccess:"关闭google认证成功",
    GA:"google 驗證碼",
    plzInputGA:"請輸入google 驗證碼",
    errorGA:"google 驗證碼格式不正確",
    seniorAuthRefuse:"拒絕原因",
    plzSeniorAuth:"請先完成高級認證！",
    phoneNumber:"手機號",
    plzPhoneNumber:"請輸入您的手機號",
    plzNewPhoneNumber:"請輸入新手機號",
    phoneFormatError:"請輸入正確的手機號",
    phoneNumberExisted:"手機號已被註冊！",
    modifyPhoneNumberSuccess:"修改綁定手機成功！請重新登錄",
    emailExisted:"郵箱已經被註冊!",
    password:"密碼",
    plzPassword:"請輸入您的密碼",
    plzOldPassword:"請輸入舊密碼",
    plzNewPassword:"請輸入新密碼",
    passwordFormatError:"密碼長度為8-20位，必須包括字母、數字",
    plzPasswordAgain:"請再次輸入密碼",
    confirmPwError:"兩次輸入密碼不一致!",
    validationCode:"驗證碼",
    plzValidationCode:"請輸入6位數的驗證碼",
    sendSMSCode:"發送驗證碼",
    sendSMSCodeSuccess:"發送驗證碼成功！",
    sendSMSCodeFail:"發送驗證碼失敗！",
    resend:"重新發送",
    registerAccount:"註冊賬號",
    registerSuccess:"註冊成功！",
    forgetPassword:"忘記密碼？",
    verificationLoading:"驗證碼加載中...",
    setLoginPassword:"設置登錄密碼",
    confirmLoginPassword:"確認登錄密碼",
    resetLoginPassword:"重置登錄密碼",
    pleaseInviteCode:"邀請碼（可選）",
    pleasePhoneV:"請輸入手機短信驗證碼",
    agreeToTheTerms:"同意條款並註冊",
    legalNotices:"用戶協議",
    userServicesAgreement:"《用戶服務協議》",
    alreadyMember:"已有賬號，",
    goToLogin:"去登錄",
    recoverPassword:"重置密碼",
    recoverPasswordSuccess:"密碼重置成功！",
    nextStep:"下一步",
    complete:"完成",
    username:"用戶名",
    email:"郵箱",
    mobile:"註冊賬號",
    inviteCode:"邀請碼",
    inviteLink:"邀請鏈接",
    inviteRecodes:"邀請記錄",
    copy:"複製",
    qrcode:"二維碼確認",
    saveQRCode:"保存二維碼",
    accountInfo:"賬號信息",
    idAuth:"身份認證",
    myPhoneNumber:"手機號碼",
    loginPassword:"登錄密碼",
    fundPassword:"資金密碼",
    googleVerification:"Google驗證",
    promotionCommission:"推廣佣金",
    invitationReward:"邀請獎勵",
    oldPassword:"原登錄密碼",
    newPassword:"新登錄密碼",
    oldPhone:"原手機號",
    newPhone:"新手機號",
    plzFundPassword:"請輸入資金密碼",
    setFundPassword:"設置資金密碼",
    oldFundPassword:"原資金密碼",
    newFundPassword:"新資金密碼",
    confirmFundPassword:"確認資金密碼",
    recoverFundPassword:"重置資金密碼",
    modifyPassword:"修改密碼",
    modifySuccess:"修改成功！",
    fullName:"真實姓名",
    typeOfCertificate:"證件類型",
    idNumber:"證件號碼",
    certificationNow:"立即認證",
    certificationTime:"註冊時間",
    certificationTip:"認證提示",
    realNameSuccess:"恭喜您，實名認證成功，是否進行高級身份認證？",
    certificationSuccess:"恭喜您，已經認證成功！",
    rejectCertificate:"暫不認證",
    SMSVerificationCode:"短信驗證碼",
    certificationInformation:"認證信息",
    certNotices:"請確保您使用本人的真實身份進行驗證，我們會保護您的個人信息安全",
    completeInfo:"完善信息",
    geeTestButtonText:"點擊按鈕進行驗證",
    plzSetUserInfo:"請設置用戶名、綁定郵箱、資金密碼",
    goSetting:"去設置",
    plzRestPassword:"請設置一個新的密碼",
    plzRealName:"請輸入姓名",
    realNameError:"長度在 2 到 20 個字符",
    usernameError:"用戶名格式：字母開頭，包含字母和數字",
    plzCardType:"請選擇證件類型",
    plzCardId:"請輸入證件號",
    advancedCertification : {
      title:"高級身份認證",
      uploadSizeLimit:"請確保照片的內容完整並清晰可見，大小不要超過3M。",
      cardFrontTips: "本人身份證正面照片",
      plzUpFrontPhoto:"請上傳正面照片",
      cardBackTips: "本人身份證背面照片",
      plzUpBackPhoto: "請上傳背面照片",
      frontPhotoAndSignatureTips:"手持本人身份證正面照和個人簽字",
      plzUpHandheldPhoto: "請上傳手持照片",
      frontPhotoAndSignatureDesc:"請您上傳壹張手持身份證正面照和個人簽字的照片，個人簽字的內容當前日期。請確保照片和個人簽字的內容清晰可見。",
      example:"示例",
      uploadSuccess: "上傳成功！",
      uploadFormatError:"圖片上傳僅支持JPG格式!",
      uploadPhotoSizeLimit:"圖片大小不能超過2MB",
      underReview:"高級認證審核中...",
      passed: "高級認證審核通過",
      auditNotPassed: "高級認證審核未通過",
    },
    agreementDetail:{
      1:{
        title:"第一條",
        content:"本網站的宗旨是在不違反中華人民共和國法律法規的前提下，盡可能地為中國廣大比特幣、萊特幣愛好者及投資者提供專業的國際化水準的交易平台和金融產品。 禁止使用本網站從事洗錢、走私、商業賄賂等一切非法交易活動，若發現此類事件，本站將凍結賬戶，立即報送公安機關。"
      },
      2:{
        title:"第二條",
        content:"當公安機關、檢察院、法院等有權機關出示相應的調查文件要求本站配合對指定用戶進行調查時， 或對用戶賬戶採取查封、凍結或者劃轉措施時，本站將按照公安機關的要求協助提供相應的用戶數據，或進行相應的操作。 因此而造成的用戶隱私洩露、賬戶不能操作及因此給所造成的損失等，本站不承擔任何責任。"
      },
      3:{
        title:"第三條",
        content:"本網站使用者因為違反本聲明的規定而觸犯中華人民共和國法律的，本站做為服務的提供方，有義務對平台的規則及服務進行完善， 但本站並無觸犯中華人民共和國法律的動機和事實，對使用者的行為不承擔任何連帶責任。"
      },
      4:{
        title:"第四條",
        content:"凡以任何方式登錄本網站或直接、間接使用本網站服務者，視為自願接受本網站聲明的約束。"
      },
      5:{
        title:"第五條",
        content:"本聲明未涉及的問題參見中華人民共和國有關法律法規，當本聲明與中華人民共和國法律法規衝突時，以中華人民共和國法律法規為準。本網站使用者因為違反本聲明的規定而觸犯中華人民共和國法律的，一切後果自己負責，本網站不承擔任何責任。"
      }
    },
    inviteCodeError:"邀請碼只允許輸入字母和數字",
    idCardType:{
      1: "身份證",
      2: "軍官證",
      3: "護照",
      4: "臺灣居民通行證",
      5: "港澳居民通行證",
      9: "其他"
    },
    poolCommunity:"礦池社區",
    pool:"礦池",
    plzPoolName:"請輸入礦池名稱",
    createPoolSuccess:"申請礦池成功！",
    createPool:"創建礦池",
    minePool:"我的礦池",
    poolName:"礦池名稱",
    poolDescription:"礦池描述",
    poolRemark:"礦池備註",
    poolStatus:"礦池狀態",
    poolStatusMap:{
      0:"待審核",
      1:"通過",
      2:"拒絕",
    }
  },
  c2c:{
    payeeTips:"買入成功，請在30分鐘內完成付款。",
    // usdtAvailable:"USDT可用額度",
    // usdtFreeze:"USDT凍結額度",
    usdtAvailable:"GCN可用額度",
    usdtFreeze:"GCN凍結額度",
    // buyCoin:"買入USDT",
    // sellCoin:"賣出USDT"
    buyCoin:"買入GCN",
    sellCoin:"賣出GCN",
    buyPrice:"買入價（￥）",
    sellPrice:"賣出價（￥）",
    // buyAmount:"買入量(USDT)",
    // sellAmount:"賣出量(USDT)",
    buyAmount:"買入量(GCN)",
    sellAmount:"賣出量(GCN)",

    needCNY:"需要CNY：",
    getCNY:"可得CNY：",
    buy:"立即買入",
    sell:"立即賣出",
    pleaseEnterBuyAmount:"請輸入買入量",
    pleaseEnterSellAmount:"請輸入賣出量",
    buyingRecodes:"買入記錄",
    rechangeNo:"充值訂單",
    rechangeTime:"充值時間",
    rechangeMethod:"充值方式",
    rechangeAmount:"充值金額（CNY）",
    // actualAccount1:'充值數量（USDT）',
    actualAccount1:'充值數量（GCN）',
    actualAccount:"實際到賬",
    status:"狀態",
    sellingRecodes:"賣出記錄",
    withdrawalTime:"提幣時間",
    withdrawalAmount:"提幣金額 GCN",
    bankCard:"銀行卡號",
    fee:"手續費",
    addBankCard:"添加銀行卡",
    updateBankCrad:'更改銀行卡',
    addCardTips:"只可以添加本人的銀行卡",
    accountName:"開戶名",
    accountOpeningBank:"開戶銀行",
    bankCardNumber:"銀行卡號",
    confirmCardNumber:"確認卡號",
    enterBankCardTips:"填寫正確的銀行卡號，不必用空格隔開！",
    tradePassword:"交易密碼",
    remittanceOrder:"匯款訂單",
    remittanceNotice:"订单已提交成功！请在30分钟内向商家付款，否则订单会被自动取消。",
    payeeAccountName:"收款方戶名",
    payeeBank:"收款方開戶行",
    payeeAccountNumber:"收款方賬號",
    transferAmount:"轉賬金額",
    remarkContent:"匯款時備註內容",
    remarkMust:"請務必填寫",
    remarkName:"備註名",
    sellOrder:"賣出訂單",
    offlinePayment:"線下付款",
    remarkIptName:'請輸入備註名',
    accountIptName:'請輸入開戶名',
    selectBank:'請選擇銀行',
    selectAccountBankAddress:'請選擇開戶銀行所在地',
    selectAccountBankName:'請輸入開戶支行名稱',
    inputBankCrad:'請輸入銀行卡號',
    reEnterBankCrad:'請再次銀行卡號',
    twoReEnterBankCrad:'兩次輸入銀行卡號不壹致',
    inputRechangeNumber:'請輸入充值数量',
    rechangeMaxNumber:'充值數量必須大於100',
    inputWithdrawNumber:'請輸入提幣数量',
    withdrawMinNumber:'提幣数量最小100',
    selectBankCrad:'請選擇銀行卡',
    inputVCode:'請輸入驗證碼',
    sellMaxNumber:'賣出數量必須大於100',
    setRealName:'您尚未進行實名認證, 是否前去設置?',
    setTradeInfo:'您還有交易信息待完善, 是否前去設置?',
    sellSuccess:'賣出成功，商家將在30分鐘內完成付款。',
    rechargeMap:{
      0:'待審核',
      1:'審核通過',
      2:'拒絕',
      3:'充值成功',
    },
    withdrawMap:{
      0:'待審核',
      1:'審核通過',
      2:'拒絕',
      3:'提幣成功',
    },
    rechargeType:{
      bank:'第三方支付',
      alipay:'支付寶',
      cai1pay:'財易付',
      linepay:'人工到賬',
    }

  },
  accountAssets:{
    account: "賬戶",
    assets:"賬戶資產",
    hideSmallAssets:"隱藏小額資產",
    inputCoinName:"請輸入幣種名稱",
    currentAmount:"當前總估值",
    accountTips:"注：資金總估是由歷史行情估算值，僅為用戶提供一個參考，請以單項資金為準",
    walletAddress:"錢包地址",
    copy:"複製到剪貼板",
    recharge:"充值",
    rechargeTips1:"注意：此地址為",
    rechargeTips2:"充幣地址，非",
    rechargeTips3:"資產轉入將無法找回。",
    rechargeRecord:"充值記錄",
    more:"更多",
    rechargeTime:"轉入時間",
    rechargeAddr:"轉入地址",
    rechargeNum:"轉入數量",
    rechargeFee:"轉入手續費",
    status:"狀態",
    withdraw:"提幣",
    withdrawAddr:"提幣地址",
    select:"請選擇",
    add:"新增",
    withdrawNum:"轉出數量",
    mobileValidate:"手機驗證",
    inputValidateCode:"請輸入驗證碼",
    payPassword:"交易密碼",
    inputPayPassword:"請輸入交易密碼",
    submit:"提交",
    withdrawRecord:"提幣記錄",
    withdrawTime:"轉出時間",
    withdrawFee:"轉出手續費",
    withdrawMum:"實際轉出",
    coinName:"幣種",
    carryingAmount:"賬面餘額",
    freezeAmount:"凍結",
    balanceAmount:'可用餘額',
    netValue:"實際淨值",
    floatProfit:"持倉盈虧",
    totalProfit:"總盈虧",
    lockMargin:"佔用保證金",
    operation:"操作",
    inputWithDrawAddr:"請輸入提幣地址",
    inputWithDrawNum:"請輸入轉出數量",
    withDrawSuccess:"提幣成功!",
    poolAmount: "總凍結",
    poolThawed: "已解凍量",
    poolFreeze: "凍結獎勵",
    poolCanDefrost: "可解凍獎勵",
    unfreezeSuccess: "解凍成功"
  },
  addressManagement:{
    addWithdrawAddr:"添加提幣地址",
    inputWithdrawAddr:"請輸入提幣地址",
    addressAbbreviation:"地址簡稱",
    inputWalletAddress:"請輸入錢包地址",
    inputAddressAbbreviation:"請輸入地址簡稱",

  },
  patch: {
    placeholder: {
      username: '請輸入用戶名',
      email: '請輸入郵箱',
      password: '請設置交易密碼',
      repassword: '請確認交易密碼',
      realName:'請輸入真實姓名',
      voucherCode:'請輸入證件號碼'
    },
    address: '發幣地址',
    withdrawMum: '實際轉入',
    marketType:'交易類型',
    forexType:"類型",
    forexTypeMap:{
      0:"--",
      1:"開倉",
      2:"平倉"
    },
    margin:'保證金',
    tradeTypeMap:{
      1:'幣幣交易',
      2:'創新交易',
    },
    tradeStatusMap:{
      0: '未成交',
      1: '已成交',
      2: '已取消',
      4: '异常单',
    }
  },
  loginRegist:{
    emailRegist:'郵箱註冊',
    plzInputEmail:'請輸入郵箱',
    richScan:'掃一掃安全登錄',
    reading:'我已閱讀並同意',
    terms:'服務條款',
    mobileRegist:'手機註冊',
    plzInputEmailCode:'請輸入郵箱驗證碼',
    errorEmail:'郵箱格式不正確',
    plzInputAccount:"請輸入手機或郵箱",
    emailExisted:"郵箱已被註冊",
    plzInputCode:"請輸入驗證碼",
    emailreg:'郵箱註冊',
    plemailreg:'請輸入郵箱',
    richScan:'掃一掃安全登錄',
    reading:'我已閱讀並同意',
    terms:'服務條款',
    mobilereg:'手機註冊',
    inputemeilvcode:'請輸入郵箱驗證碼',
    errorEmail:'郵箱格式不正確',
    plzInputAccount:"請輸入手機或郵箱"
  },
  copySuccess:"複製成功!",
  copyError:"複製失敗!",
  add:"添加",
  prompt:"提示",
  yes:"確定",
  no:"取消",
  pleaseChoose:"請選擇",
  pleaseEnter:"請輸入",
  submit:"提交",
  reset:"重置",
  modify:"修改",
  operate:"操作",
  getCode:"獲取驗證碼",
  remark:"備註",
  address:"地址",
  completeHint:"您還有交易信息待完善, 是否前去設置?",
  setting:"設置",
  payPassword:"交易密碼",
  inputPayPassword:"請輸入交易密碼",
  nodata:"暫無記錄",
  emptyContent:"內容不能為空！",
  notLogin:"您還沒有登錄，",
  or: "或",
  addIssueSuccess:"工單提交成功！",
  delete:"刪除",
  addFavorite: "已收藏！",
  unlogin:"未登錄",
  amountError:"您的余额不足！",

  downApp:"下載App",
  platform:'多平台終端接入',
  cover:'覆蓋ios、Android多個平台，支持全業務功能',
  tutorial:'下載教程',
  download:"下載",
  delFavorite:"已取消收藏！",
  amountError:"您的餘額不足！",
  all:'全部',
  rechargeExpense:'充值免費 交易手續費0.2% ',
  currency:'幣種',
  USDTfee:'對USDT交易費',
  BTCfee:'對BTC交易費',
  ETHfee:'對ETH交易費',
  WithdrawalCharge:'提幣手續費',
  DailyWithdrawalLimit:'日體現額度',
  Chargefee:'充值手續費',
  BTCwithdraw:'最低提幣額度折合數字貨幣需要達到0.01個BTC,方可提幣',
  rai:'註冊登錄',
  rai1:'點擊幣小牛首頁右上角的註冊，進入註冊頁面。',
  rai2:'輸入手機號、驗證碼和登錄密碼後點擊發送驗證碼，輸入驗證碼點擊同意條款並註冊。',
  rai3:'註冊後會自動跳轉到登錄界面，輸入手機號碼、登錄密碼及驗證碼後點擊登錄。',
  rai4:'登錄後會出現以下彈窗，點擊去設置。',
  rai5:'完善用戶名、郵箱及交易密碼三項信息後點擊提交，此時方才完整註冊。',
  rai6:'點擊幣小牛首頁頂部菜單個人中心，可進行實名認證和邀請好友獲得獎勵。',
  rwi:'充值',
  rwi1:'登錄幣小牛個人賬戶，點擊幣小牛網站首頁頂部菜單“場外交易“.',
  rwi2:'進入場外交易市場後，點擊右側添加銀行卡。',
  rwi3:'按照添加銀行卡彈出頁面填寫對應信息，確認無誤後點擊添加。',
  rwi4:'銀行卡添加成功後會在右側顯示，接著輸入購買數量，點擊立即買入。',
  rwi5:'點擊“立即買入“會出現以下彈窗，匯款時請記得壹定要做好備註方便驗證。',
  rwi6:'確定匯款到賬後點擊“確定“，收到款項後平臺會立即將幣充值到您的賬戶。',
  jtcs:'加入社群',
  noif:'無幣實操',
  applyinfo:'上線幣種說明及申請',
  applyinfo1:`如果您想在幣小牛上幣，請發送幣種相關信息到以下郵箱：`,
  applyinfo2:'我們將會在10個工作日與您聯系!',
  SubmitTheRepairOrder:'提交工單',
  jtc:`<h3>加入社群</h3>
                <p>幣小牛Telegram社群將會成為官方主力信息互動入口，主要會有以下重點改進和服務：</p>
                <p>1-第壹時間得到幫助，核心官方人員維護、高管直接負責人觸手可及；</p>
                <p>2-最及時的上幣信息，把握充值交易時間，快人壹步；</p>
                <p>3-最準確的官方聲明，明確信息渠道，遠離辟謠；</p>
                <p>4-不錯過任何壹次活動送幣，不放過每壹次分叉糖果。</p>
                 
                <p>Telegram App下載</p>
                <p>iOS：<a href="https://telegram.org/dl/ios">https://telegram.org/dl/ios</a></p>
                <p>安卓：<a href="https://telegram.org/dl/android">https://telegram.org/dl/android</a></p>

                <p>幣小牛電報群： 復制鏈接地址到Telegram，搜索進群。</p>
                <p><a href="https://t.me/joinchat/INJTjBJIQevBzVLWapQESQ">https://t.me/joinchat/INJTjBJIQevBzVLWapQESQ</a></p>

                <p>溫馨提示：telegram為國外開發的加密通訊軟件，使用telegram前需在手機應用商店下載VPN,方可翻墻使用telegram）</p>
                <p>未能翻墻用戶可添加官方客服微信號：<strong>lmex123</strong>，或 QQ群：<strong>710878285</strong>咨詢。</p>`,
  about:`<h3>關於我們</h3>
            <p>幣小牛交易平臺是壹家為全球用戶提供數字資產交易的數字貨幣交易平臺。聚合全球優質區塊鏈資產，秉持著“用戶至上”的服務理念，致力於為全球用戶提供安全、專業、誠信、優質的區塊鏈資產兌換服務，進而推動區塊鏈資產的安全流動與更多的場景化應用。</p>
            <h3>我們的宗旨</h3>
            <p>
              <span>客戶至上</span>
              <span>開放創新</span>
              <span>積極進取</span>
            </p>
            <h3>我們的優勢</h3>
            <ul>
              <li>核心交易處理技術<br/>經權威認證的內存撮合技術，處理速度高達140萬單/秒，遠高於行業平均水平。</li>
              <li>專業產品運營團隊<br/>管理成員均來自知名區塊鏈團隊，有多年數字資產行業經驗，熟悉數字資產運營管理。</li>
              <li>重塑數字資產平臺服務體系<br/>幣幣交易、場外交易、創新交易壹站式服務，堅持極致的用戶體驗和安全的金融屬性。</li>
            </ul>
            <h3>我們的服務</h3>
            <ul>
              <li>智能交易<br/>采用多幣種交易，7x24小時自動監測行情變化，滿足策略條件，自動發起交易，無需盯盤就能輕松斬獲收益。</li>
              <li>風險控制</li>
            </ul>`,
  serviceAgreement:`<p>訪問或使用幣小牛網站( <a href="http://www.pcn.li">http://www.pcn.li</a>），該網站是壹個專門供用戶進行數字資產交易和提供相關服務（以下稱“該服務”或“服務”）的平臺。在使用前需要您（“用戶”）同意接受這些條款（“條款”），這些條款影響您的法律權利和義務。如果您不同意被這些條款約束，請勿訪問或使用服務，繼續使用則默認接受本協議。</p>
            <p>為了本協議表述之方便，公司和該網站在本協議中合稱使用“我們”或其他第壹人稱稱呼。對登陸該網站的自然人或其他主體均為本網站的用戶，以下將使用“您”或其他第二人稱。為了本協議表述之便利，我們和您在本協議中合稱為“雙方”，我們或您單稱為“壹方”。</p>
            <h3>重要提示：</h3>
            <ul>
              <li>1 數字資產本身不由任何金融機構或公司或本網站發行；</li>
              <li>2 數字資產目前投入使用市場場景相對較少，故存在相應風險，並實行24小時交易制，亦無漲跌限制，價格容易受莊家、全球政府政策的影響而大幅波動；</li>
              <li>3 本網站僅作為您獲取數字資產信息、尋找交易方、就數字資產的交易進行協商及開展交易的場所，本網站不參與您的任何交易，故您應自行謹慎判斷確定相關數字資產及/或信息的真實性、合法性和有效性，並自行承擔因此產生的責任與損失。</li>
              <li>4 本網站的任何意見、消息、價格、建議和其他資訊均是壹般的市場評論，並不構成投資建議。我們不承擔任何因依賴該資訊直接或間接而產生的損失，包括但不限於任何利潤損失。</li>
              <li>5 本網站的內容會隨時更改並不作另行通知，我們已采取合理措施確保網站資訊的準確性，但並不能保證其準確性程度，亦不會承擔任何因本網站上的資訊或因未能鏈結互聯網、傳送或接收任何通知和信息時的延誤或失敗而直接或間接產生的損失。</li>
              <li>6 使用互聯網形式的交易系統存有風險，包括但不限於軟件，硬件和互聯網鏈結的失敗等。由於我們不能控制互聯網的可靠性和可用性，我們不對延誤和鏈結失敗而承擔任何責任。</li>
              <li>7 <a href="http://www.pcn.li">http://www.pcn.li</a>為本網站唯壹官方對外信息公布平臺；</li>
              <li>8 因各國法律法規和規範性文件的制定或者修改，數字資產交易隨時可能被暫停或被禁止，其高風險並不適合絕大部分人士。您應提前了解此投資有可能導致部分損失或全部損失。</li>
              <li>9 禁止使用本網站從事洗錢、走私、商業賄賂等壹切非法交易活動，若發現此類事件，本站將采取各種可使用之手段，包括但不限於凍結賬戶，通知相關權力機關等，我們不承擔由此產生的所有責任並保留向相關人士追究責任的權利。</li>
              <li>10 禁止使用本網站進行惡意操縱市場、不正當交易等壹切不道德交易活動，若發現此類事件，本網站將對所有惡意操縱價格、影響交易系統等不道德行為采取警告、限制交易、關停賬戶等預防性保護措施，我們不承擔由此產生的所有責任並保留向相關人士追究責任的權利。</li>
            </ul>
            <h3>壹、總則</h3>
            <ol>
              <li>1.1 《用戶協議》（以下稱“本協議”或“本條款及條件”），由正文以及本網站已經發布的或將來可能發布的各類規則、聲明、說明等共同構成。</li>
              <li>1.2 您在使用本網站提供的各項服務之前，應仔細閱讀本協議，如有不理解之處或其他必要，請咨詢專業律師。如您不同意本協議及/或隨時對其的修改，請您立即停止使用本網站提供的服務或不再登陸本網站。您壹旦登陸本網站、使用本網站的任何服務或任何其他類似行為即表示您已了解並完全同意本協議各項內容，包括本網站對本協議隨時所做的任何修改。</li>
              <li>1.3 您通過按照本網站的要求填寫相關信息註冊成功即成為本網站的會員（以下稱“會員”），在進行註冊過程中點擊“同意條款並註冊”按鈕即表示您以電子簽署的形式與公司達成協議；或您在使用本網站過程中點擊任何標有“同意”或類似意思的按鈕的行為或以其他本網站允許的方式實際使用本網站提供的服務時，均表示您完全了解、同意且接受本協議項下的全部條款的約束，無您手寫的書面簽字就本協議對您的法律約束力無任何影響。</li>
              <li>1.4 您成為本網站的會員後，您將獲得壹個會員帳號及相應的密碼，該會員帳號和密碼由會員負責保管；會員應當對以其您帳號進行的所有活動和事件負法律責任。</li>
              <li>1.5 只有成為本網站的會員才可使用本網站提供的數字資產交易平臺進行交易及享受其他本網站規定的只有會員才可獲得的服務；</li>
              <li>1.6 通過註冊和使用任何由本網站提供的服務和功能，您將被視為已閱讀，理解並：</li>
              <li>1.6.1 接受本協議所有條款及條件的約束。</li>
              <li>1.6.2 您確認您已年滿18周歲或根據不同的可適用的法律規定的具有可訂立合同的法定年齡，您在本網站的註冊、銷售或購買、發布信息等接受本網站服務的行為應當符合本網站所屬公司註冊國相關法律法規，並有充分能力接受這些條款，方使用本網站進行數字資產交易。</li>
              <li>1.6.3 您保證交易中涉及到的屬於您的數字資產均為合法取得並所有。</li>
              <li>1.6.4 您同意您為您自身的交易或非交易行為承擔全部責任和任何收益或虧損。</li>
              <li>1.6.5 您確認註冊時提供的信息是真實和準確的。</li>
              <li>1.6.6 您同意遵守任何有關法律的規定，就稅務目的而言，包括報告任何交易利潤。</li>
              <li>1.6.7 本協議只是就您與我們之間達成的權利義務關系進行約束，而並不涉及本網站用戶之間與其他網站和您之間因數字資產交易而產生的法律關系及法律糾紛。</li>
            </ol>
            <h3>二、協議修訂</h3>
            <p>我們保留不時修訂本協議、並以網站公示的方式進行公告而不再單獨通知您的權利，壹經公布，立即自動生效。您應不時瀏覽及關註本協議的更新公告及更新內容，如您不同意相關變更，應當立即停止使用本網站服務；如繼續使用，即表示您接受並同意經修訂的協議的約束。</p>
            <h3>三、註冊</h3>
            <ol>
              <li>3.1 註冊資格<br/>您確認並承諾：<br/>在您進行註冊程序或以其他本網站允許的方式實際使用本網站提供的服務時，您應當是具備可適用的法律規定的可簽署本協議及使用本網站服務應具有的能力的自然人、法人或其他組織。壹旦點擊同意註冊按鈕，即表示您自身或您的有權代理人已經同意該協議內容並由其代理註冊及使用本網站服務。若您不具備前述主體資格，則您及您的有權代理人應承擔因此而導致的壹切後果，且公司保留註銷或永久凍結您賬戶，並向您及您代理人追究責任的權利。</li>
              <li>3.2 註冊目的<br/>您確認並承諾：您進行本網站註冊並非出於違反法律法規或破壞本網站數字資產交易秩序的目的。</li>
              <li>3.3註冊流程</li>
              <li>3.3.1 您同意根據本網站用戶註冊頁面的要求提供有效的手機號碼等信息，您可以使用您提供或確認的手機號碼或者本網站允許的其它方式作為登陸手段進入本網站。如有必要，按照相關法律法規規定，您必須提供您的真實姓名、身份證件等法律法規相關信息並不斷更新註冊資料，符合及時、詳盡、準確的要求。所有原始鍵入的資料將引用為註冊資料。您應對該等信息的真實性、完整性和準確性負責，並承擔因此產生的任何直接或間接損失及不利後果。</li>
              <li>3.3.2您合法、完整並有效提供註冊所需信息並經驗證，有權獲得本網站賬號和密碼，您獲得本網站賬號及密碼時視為註冊成功，可在本網站進行會員登陸。</li>
              <li>3.3.3您同意接收本網站發送的與本網站管理、運營相關的電子郵件和/或短消息。</li>
            </ol>
            <h3>四、服務</h3>
            <p>本網站只為您通過本網站進行數字資產交易活動提供網絡交易平臺服務，本網站不提供任何國家法定貨幣充入和提取的相關服務。</p>
            <ol>
              <li>4.1 服務內容</li>
              <li>4.1.1 您有權在本網站瀏覽數字資產各項產品的實時行情及交易信息、有權通過本網站提交數字資產交易指令並完成數字資產交易。</li>
              <li>4.1.2 您有權在本網站查看其本網站會員賬戶信息，有權應用本網站提供的功能進行操作。</li>
              <li>4.1.3 您有權按照本網站發布的活動規則參與本網站組織的網站活動。</li>
              <li>4.1.4 本網站承諾為您提供的其他服務。</li>
              <li>4.2.服務規則<br/>您承諾遵守下列本網站服務規則：</li>
              <li>4.2.1 您應當遵守法律法規、規章、及政策要求的規定，保證賬戶中所有數字資產來源的合法性，不得在本網站或利用本網站服務從事非法或其他損害本網站或第三方權益的活動，如發送或接收任何違法、違規、侵犯他人權益的信息，發送或接收傳銷材料或存在其他危害的信息或言論，未經本網站授權使用或偽造本網站電子郵件題頭信息等。</li>
              <li>4.2.2 您應當遵守法律法規並妥善使用和保管其本網站賬號及登陸密碼、交易密碼、和其註冊時綁定的手機號碼、以及手機接收的手機驗證碼的安全。您對使用其本網站賬號和登陸密碼、交易密碼、手機驗證碼進行的任何操作和後果承擔全部責任。當您發現本網站賬號、登陸密碼、或交易密碼、驗證碼被未經其授權的第三方使用，或存在其他賬號安全問題時，應立即有效通知本網站，要求本網站暫停本網站賬號的服務。本網站有權在合理時間內對您的該等請求采取行動，但本網站對在采取行動前已經產生的後果/損失不承擔任何責任。未經本網站同意，您不得將本網站賬號以贈與、借用、租用、轉讓或其他方式處分給他人。</li>
              <li>4.2.3 您同意您對您在本網站的賬號、密碼下發生的所有活動（包括但不限於信息披露、發布信息、網上點擊同意或提交各類規則協議、網上續簽協議或購買服務等）承擔責任。</li>
              <li>4.2.4 您在本網站進行數字資產交易時不得惡意幹擾數字資產交易的正常進行、破壞交易秩序；不得以任何技術手段或其他方式幹擾本網站的正常運行或幹擾其他用戶對本網站服務的使用；不得以虛構事實等方式惡意詆毀本網站的商譽。</li>
              <li>4.2.5 如您因網上交易與其他用戶產生糾紛的，不得通過司法或行政以外的途徑要求本網站提供相關資料。</li>
              <li>4.2.6 您在使用本網站提供的服務過程中，所產生的應納稅賦，以及壹切硬件、軟件、服務及其它方面的費用，均由您獨自判斷和承擔。</li>
              <li>4.2.7 您應當遵守本網站不時發布和更新的本協議以及其他服務條款和操作規則，有權隨時終止使用本網站提供的服務。</li>
              <li>4.3.產品規則</li>
              <li>4.3.1交易產品規則<br/>您承諾在進入本網站交易，通過本網站與其他用戶進行交易的過程中良好遵守如下交易規則。</li>
              <li>4.3.1.1 瀏覽交易信息<br/>您在本網站瀏覽交易信息時，應當仔細閱讀交易信息中包含的全部內容，包括但不限於價格、委托量、手續費、買入或賣出方向， 您完全接受交易信息中包含的全部內容後方可點擊按鈕進行交易。</li>
              <li>4.3.1.2 提交委托<br/>在瀏覽完交易信息確認無誤之後您可以提交交易委托。您提交交易委托後，即您授權本網站代理您進行相應的交易撮合，本網站在有滿足您委托價格的交易時將會自動完成撮合交易而無需提前通知您。</li>
              <li>4.3.1.3 查看交易明細<br/>您可以通過管理中心的交易明細中查看相應的成交記錄，確認自己的詳情交易記錄。</li>
              <li>4.3.1.4 撤銷/修改委托<br/>在委托未達成交易之前，您有權隨時撤銷或修改委托。</li>
            </ol>
            <h3>五、本網站的權利和義務</h3>
            <ol>
              <li>5.1 如您不具備本協議約定的註冊資格，則本網站有權拒絕您進行註冊，對已註冊的，本網站有權註銷您的會員賬號，本網站保留向您或您的有權代理人追究責任的權利。同時，本網站保留其他任何情況下決定是否接受您註冊的權利。</li>
              <li>5.2 本網站發現賬戶使用者並非賬戶初始註冊人時，有權中止或終止該賬戶的使用。</li>
              <li>5.3 本網站通過技術檢測、人工抽檢等檢測方式合理懷疑您提供的信息錯誤、不實、失效或不完整時，有權通知您更正、更新信息或中止、終止為其提供本網站服務。</li>
              <li>5.4 本網站有權在發現本網站上顯示的任何信息存在明顯錯誤時，對信息予以更正。</li>
              <li>5.5 本網站保留隨時修改、中止或終止本網站服務的權利，本網站行使修改或中止服務的權利不需事先告知您，終止自本網站在網站上發布終止公告之日生效。</li>
              <li>5.6 本網站應當采取必要的技術手段和管理措施保障本網站的正常運行，並提供必要、可靠的交易環境和交易服務，維護數字資產交易秩序。</li>
              <li>5.7 本網站通過加強技術投入、提升安全防範等措施保障您的數字資產的安全，有義務在您賬戶出現可以預見的安全風險時提前通知您。</li>
              <li>5.8 本網站有權隨時刪除本網站內各類不符合法律法規或本網站規定等的內容信息，本網站行使該等權利不需提前通知您。</li>
              <li>5.9 本網站有權根據您所屬主權國家或地區的法律法規、規則、命令等規範的要求，向您要求提供更多的信息或資料等，並采取合理的措施，以符合當地的規範之要求，您有義務配合；5.10本網站有權根據您所屬主權國家或地區的法律法規、規則、命令等規範的要求，暫停或永久停止對您的開放本網站及其部分或全部服務。</li>
            </ol>
            <h3>六、賠償</h3>
            <p>如您發生違反本協議或其他法律法規等情況，您須向我們至少賠償100萬美元及承擔由此產生的全部費用（包括律師費等），如不夠彌補實際損失，您須補全。</p>
            <h3>七、責任限制與免責</h3>
            <ol>
              <li>7.1 您了解並同意，在任何情況下，我們不就以下各事項承擔責任：</li>
              <li>7.1.1 收入的損失；</li>
              <li>7.1.2 交易利潤或合同損失；</li>
              <li>7.1.3 業務中斷；</li>
              <li>7.1.4 預期可節省的貨幣損失；</li>
              <li>7.1.5 信息的損失；</li>
              <li>7.1.6 機會、商譽或聲譽的損失；</li>
              <li>7.1.7 數據的損壞或損失；</li>
              <li>7.1.8 購買替代產品或服務的成本；</li>
              <li>7.1.9 任何由於侵權（包括過失）、違約或其他任何原因產生的間接的、特殊的或附帶性的損失或損害，不論這種損失或損害是否可以為我們合理預見；不論我們是否事先被告知存在此種損 失或損害的可能性。</li>
              <li>7.2 您了解並同意，我們不對因下述任壹情況而導致您的任何損害賠償承擔責任：</li>
              <li>7.2.1 我們有合理的理由認為您的具體交易事項可能存在重大違法或違約情形。</li>
              <li>7.2.2 我們有合理的理由認為您在本網站的行為涉嫌違法或不道德。</li>
              <li>7.2.3 通過本網站服務獲取任何信息或進行交易等行為或替代行為產生的費用及損失。</li>
              <li>7.2.4 您對本網站服務的誤解。</li>
              <li>7.2.5 任何非因我們的原因而引起的與本網站提供的服務有關的其它損失。</li>
              <li>7.3 我們對由於信息網絡設備維護、信息網絡連接故障、電腦、通訊或其他系統的故障、電力故障、天氣原因、意外事故、罷工、勞動爭議、暴亂、起義、騷亂、生產力或生產資料不足、火災、洪水、風暴、爆炸、戰爭、銀行或其他合作方原因、數字資產市場崩潰、政府行為、 司法或行政機關的命令、其他不在我們可控範圍內或我們無能力控制的行為或第三方的原因而造成的不能服務或延遲服務，以及造成的您的損失，我們不承擔任何責任。</li>
              <li>7.4 我們不能保證本網站包含的全部信息、程序、文本等完全安全，不受任何病毒、木馬等惡意程序的幹擾和破壞，故您登陸、使用本網站任何服務或下載及使用該下載的任何程序、信息、數據等均是您個人的決定並自行承擔風險及可能產生的損失。</li>
              <li>7.5 我們對本網站中鏈接的任何第三方網站的任何信息、產品及業務及其他任何形式的不屬於我們的主體的內容等不做任何保證和承諾，您如果使用第三方網站提供的任何服務、信息及產品等均為您個人決定且承擔由此產生的壹切責任。</li>
              <li>7.6 我們對於您使用本網站服務不做任何明示或暗示的保證，包括但不限於本網站提供服務的適用性、沒有錯誤或疏漏、持續性、準確性、可靠性、適用於某壹特定用途。同時，我們也不對本網站提供的服務所涉及的技術及信息的有效性、準確性、正確性、可靠性、質量、穩定、完整和及時性作出任何承諾和保證。是否登陸或使用本網站提供的服務是您個人的決定且自行承擔風險及可能產生的損失。我們對於數字資產的市場、價值及價格等不做任何明示或暗示的保證，您理解並了解數字資產市場是不穩定的，價格和價值隨時會大幅波動或崩盤，交易數字資產是您個人的自由選擇及決定且自行承擔風險及可能產生的損失。</li>
              <li>7.7 本協議中規定我們的保證和承諾是由我們就本協議和本網站提供的服務的唯壹保證，並取代任何其他途徑和方式產生的保證和承諾，無論是書面的或口頭的，明示的或暗示的。所有這些保證僅代表我們自身的承諾和保證，並不保證任何第三方遵守本協議中的保證和承諾。</li>
              <li>7.4 我們不能保證本網站包含的全部信息、程序、文本等完全安全，不受任何病毒、木馬等惡意程序的幹擾和破壞，故您登陸、使用本網站任何服務或下載及使用該下載的任何程序、信息、數據等均是您個人的決定並自行承擔風險及可能產生的損失。</li>
              <li>7.5 我們對本網站中鏈接的任何第三方網站的任何信息、產品及業務及其他任何形式的不屬於我們的主體的內容等不做任何保證和承諾，您如果使用第三方網站提供的任何服務、信息及產品等均為您個人決定且承擔由此產生的壹切責任。</li>
              <li>7.6 我們對於您使用本網站服務不做任何明示或暗示的保證，包括但不限於本網站提供服務的適用性、沒有錯誤或疏漏、持續性、準確性、可靠性、適用於某壹特定用途。同時，我們也不對本網站提供的服務所涉及的技術及信息的有效性、準確性、正確性、可靠性、質量、穩定、完整和及時性作出任何承諾和保證。是否登陸或使用本網站提供的服務是您個人的決定且自行承擔風險及可能產生的損失。我們對於數字資產的市場、價值及價格等不做任何明示或暗示的保證，您理解並了解數字資產市場是不穩定的，價格和價值隨時會大幅波動或崩盤，交易數字資產是您個人的自由選擇及決定且自行承擔風險及可能產生的損失。</li>
              <li>7.7 本協議中規定我們的保證和承諾是由我們就本協議和本網站提供的服務的唯壹保證，並取代任何其他途徑和方式產生的保證和承諾，無論是書面的或口頭的，明示的或暗示的。所有這些保證僅代表我們自身的承諾和保證，並不保證任何第三方遵守本協議中的保證和承諾。</li>
              <li>7.8 我們並不放棄本協議中未提及的在法律適用的最大範圍內我們享有的限制、免除或抵銷我們損害賠償責任的任何權利。</li>
              <li>7.9 您註冊後即表示認可我們按照本協議中規定的規則進行的任何操作，產生的任何風險均由您承擔。</li>
            </ol>
            <h3>八、協議終止</h3>
            <ol>
              <li>8.1 本網站有權依據本協議約定註銷您的本網站賬號，本協議於賬號註銷之日終止。</li>
              <li>8.2 本網站有權依據本協議約定終止全部本網站服務，本協議於本網站全部服務終止之日終止。</li>
              <li>8.3 本協議終止後，您無權要求本網站繼續向其提供任何服務或履行任何其他義務，包括但不限於要求本網站為您保留或向您披露其原本網站賬號中的任何信息， 向您或第三方轉發任何其未曾閱讀或發送過的信息等。</li>
              <li>8.4 本協議的終止不影響守約方向違約方要求其他責任的承擔。</li>
            </ol>
            <h3>九、知識產權</h3>
            <ol>
              <li>9.1 本網站所包含的全部智力成果包括但不限於網站標誌、數據庫、網站設計、文字和圖表、軟件、照片、錄像、音樂、聲音及其前述組合，軟件編譯、相關源代碼和軟件的知識產權權利均歸本網站所有。您不得為商業目的復制、更改、拷貝、發送或使用前述任何材料或內容。</li>
              <li>9.2 本網站名稱中包含的所有權利 (包括但不限於商譽和商標、標誌) 均歸公司所有。</li>
              <li>9.3 您接受本協議即視為您主動將其在本網站發表的任何形式的信息的著作權，包括但不限於：復制權、發行權、出租權、展覽權、表演權、放映權、廣播權、信息網絡傳播權、攝制權、改編權、翻譯權、匯編權 以及應當由著作權人享有的其他可轉讓權利無償獨家轉讓給本網站所有，本網站有權利就任何主體侵權單獨提起訴訟並獲得全部賠償。 </li>
              <li>9.4 您在使用本網站服務過程中不得非法使用或處分本網站或他人的知識產權權利。您不得將已發表於本網站的信息以任何形式發布或授權其它網站（及媒體）使用。</li>
              <li>9.5 您登陸本網站或使用本網站提供的任何服務均不視為我們向您轉讓任何知識產權。</li>
            </ol>
            <h3>十、信息保護</h3>
            <ol>
              <li>10.1 適用範圍</li>
              <li>10.1.1 在您註冊網站賬號或者使用賬戶時，您根據本網站要求提供的個人註冊信息，包括但不限於電話號碼、郵箱信息、身份證件信息。</li>
              <li>10.1.2 在您使用本網站服務時，或訪問本網站網頁時，本網站自動接收並記錄的您瀏覽器上的服務器數值，包括但不限於IP地址等數據及您要求取用的網頁記錄。</li>
              <li>10.1.3 本網站收集到的您在本網站進行交易的有關數據，包括但不限於交易記錄。</li>
              <li>10.1.4本網站通過合法途徑取得的其他您個人信息。</li>
              <li>10.2 信息使用</li>
              <li>10.2.1 不需要您額外的同意，您在本網站註冊成功即視為您同意本網站收集並使用其在本網站的各類信息。您了解並同意，本網站可以將收集的您信息用作包括但不限於下列用途：</li>
              <li>10.2.2 向您提供本網站服務；</li>
              <li>10.2.3 在您使用本網站服務時，本網站將您的信息用於身份驗證、客戶服務、安全防範、詐騙監測、市場推廣、存檔和備份用途，或與第三方合作推廣網站等合法用途，確保本網站向您提供的產品和服務的安全性；</li>
              <li>10.2.4為了使您了解本網站服務的具體情況，您同意本網站向其發送營銷活動通知、商業性電子信息以及提供與您相關的廣告以替代普遍投放的廣告；</li>
              <li>10.2.5 軟件認證或管理軟件升級；</li>
              <li>10.2.6 用作其他壹切合法目的以及經您授權的其他用途。</li>
              <li>10.2.7 本網站不會向其他任何人出售或出借您的個人信息，除非事先得到您的許可。本網站也不允許任何第三方以任何手段收集、編輯、出售或者無償傳播您的個人信息。</li>
              <li>10.2.8 本網站對所獲得的客戶身份資料和交易信息等進行保密，不得向任何單位和個人提供客戶身份資料和交易信息，相關主權國家或地區法律法規、政令、命令等規定除外。</li>
            </ol>
            <h3>十壹、出口控制</h3>
            <p>您理解並承認，您不得將本網站上的任何材料（包括軟件）出口、再出口、進口或轉移，故您保證不會主動實施或協助或參與任何上述違反法規的出口或有關轉移或其他違反適用的法律和法規的行為；如發現此類情形，會向我們積極報告並協助我們處理。</p>
            <h3>十二、轉讓協議</h3>
            <p>本協議中約定的權利及義務同樣約束從該權利義務中獲取到利益的各方的受讓人，繼承人，遺囑執行人和管理員。您不得在我們不同意的前提下轉讓給任何第三人，但我們可隨時將我們在本協議中的權利和義務轉讓給任何第三人，並給予您提前30天的通知。</p>
            <h3>十三、可分割性</h3>
            <p>如本協議中的任何條款被任何有管轄權的法院認定為不可執行的，無效的或非法的，並不影響本協議的其余條款的效力。</p>
            <h3>十四、非代理關系</h3>
            <p>本協議中的任何規定均不可被認為創造了、暗示了或以其他方式將我們視為您的代理人、受托人或其他代表人，本協議有其他規定的除外。</p>
            <h3>十五、棄權</h3>
            <p>我們或您任何壹方對追究本協議約定的違約責任或其他責任的棄權並不能認定或解釋為對其他違約責任的棄權，未行使任何權利不得以任何方式被解釋為對該等權利的放棄。</p>
            <h3>十六、協議的生效和解釋</h3>
            <ol>
              <li>16.1 本協議於您點擊本網站註冊頁面的同意註冊並完成註冊程序、獲得本網站賬號和密碼時生效，對本網站和您均具有約束力。</li>
              <li>16.2 本協議的最終解釋權歸本網站所有。</li>
            </ol>`,
}