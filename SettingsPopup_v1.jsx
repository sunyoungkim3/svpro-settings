import React, { useState, useRef } from 'react';

export default function SettingsPopup() {
  const [isOpen, setIsOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('general');
  const [hasUnsavedChanges, setHasUnsavedChanges] = useState(false);
  const [showUnsavedAlert, setShowUnsavedAlert] = useState(false);
  const [pendingTab, setPendingTab] = useState(null);
  const [showSaveSuccess, setShowSaveSuccess] = useState(false);
  const [showAnalysisTabWarning, setShowAnalysisTabWarning] = useState(false);
  
  // 분석 탭에 영향을 주는 설정의 초기값 저장
  const initialCriticalSettings = useRef({
    pcrRawDataType: '',
    sampleId: 'plrn',
    resultView: 'Simple',
    ctValueDigit: 'Two Decimal Digit',
    sampleIndexSetting: 'enable',
    targetOnOffChanged: false
  });
  
  // Target on/off 변경 여부 추적
  const [targetOnOffChanged, setTargetOnOffChanged] = useState(false);

  const [settings, setSettings] = useState({
    // General
    language: '',
    pcrRawDataType: '',
    csvHeaderSettings: 'default',
    // 다중 선택 가능한 데이터 불러오기 방식
    loadingMethods: {
      manual: true,
      preset: false,
      plrn: false,
      csv: false,
      barcode: false
    },
    plateBarcode: false,
    plateSettingFile: 'None',
    csvFileOpenOption: 'Sample No',
    plateSetting: { manual: true, preset: true },
    sampleId: 'plrn',
    targetAbbreviation: false,
    openPcrDataFileFolderPath: '',
    openLimsFileFolderPath: '',
    exportFolderPath: '',
    saveFolderPath: '',
    saveWorkListFolderPath: '',
    // Display Setting
    resultView: 'Simple',
    wellTable: '세로',
    resultDisplay: 'Plain Text',
    ctValueDigit: 'Two Decimal Digit',
    sampleIndexSetting: 'enable',
    displayPositiveWhenICNegative: false,
    invalidateWhenPCNCInvalid: false,
    // Export - LIS Export Setting
    autoExport: false,
    sampleToExport: 'All Samples',
    exportFormat: 'xlsx',
    targetAlignmentMethod: '세로',
    meltTemperatureColumn: false,
    // Export - Auto Save Filename
    useRawDataFilename: true,
    usePrefix: false,
    prefixType: 'A',
    createNewFolder: false,
    folderNameType: 'A',
    // Print
    printRange: 'All Samples',
    printItems: { number: true, sampleId: true },
    logoFile: '',
    addLogoToPrint: false,
    logoPrintLocation: 'Top Left',
    watermarkFile: '',
    addWatermarkToPrint: false,
    watermarkLayout: '1x1',
    // HL7 Setting
    hl7Version: '2.5.1',
    hl7TransferItems: { result: true, ctValue: true, meltTemp: false },
    hl7SdInvalid: false,
    hl7SampleToExport: 'All Samples',
    hl7TransferProtocol: 'HTTP',
    hl7ServerIP: '',
    hl7ServerPort: '',
    hl7TransferMethod: 'all-at-once',
    hl7ResponseTimeout: '30000',
    hl7AbbrevAssaySearch: '',
    hl7AbbrevSelectedAssay: null,
    // Assay Pack
    assaySearch: '',
    assayList: [
      { 
        id: 1, 
        name: 'Allplex SARS-CoV-2', 
        intendedUse: 'IVD', 
        version: '1.0.0',
        manufacturer: 'Seegene',
        installDate: '2024-01-15',
        targets: [
          { id: 1, channel: 'FAM', dye: 'FAM', target: 'E gene', enabled: true },
          { id: 2, channel: 'HEX', dye: 'HEX', target: 'RdRP gene', enabled: true },
          { id: 3, channel: 'Cal Red 610', dye: 'CR610', target: 'N gene', enabled: true },
          { id: 4, channel: 'Quasar 670', dye: 'Q670', target: 'IC', enabled: true },
        ]
      },
      { 
        id: 2, 
        name: 'Allplex Respiratory Panel 1', 
        intendedUse: 'IVD', 
        version: '2.1.0',
        manufacturer: 'Seegene',
        installDate: '2024-02-20',
        targets: [
          { id: 1, channel: 'FAM', dye: 'FAM', target: 'Flu A', enabled: true },
          { id: 2, channel: 'HEX', dye: 'HEX', target: 'Flu B', enabled: true },
          { id: 3, channel: 'Cal Red 610', dye: 'CR610', target: 'RSV A', enabled: true },
          { id: 4, channel: 'Quasar 670', dye: 'Q670', target: 'RSV B', enabled: true },
          { id: 5, channel: 'Quasar 705', dye: 'Q705', target: 'ADV', enabled: true },
        ]
      },
      { 
        id: 3, 
        name: 'Allplex GI-Bacteria', 
        intendedUse: 'IVD', 
        version: '1.5.2',
        manufacturer: 'Seegene',
        installDate: '2024-03-10',
        targets: [
          { id: 1, channel: 'FAM', dye: 'FAM', target: 'Salmonella', enabled: true },
          { id: 2, channel: 'HEX', dye: 'HEX', target: 'Shigella', enabled: true },
          { id: 3, channel: 'Cal Red 610', dye: 'CR610', target: 'E.coli', enabled: true },
        ]
      },
      { 
        id: 4, 
        name: 'GenePlex COVID-19 Detection Kit', 
        intendedUse: 'RUO', 
        version: '1.2.0',
        manufacturer: 'new-co',
        installDate: '2024-04-15',
        targets: [
          { id: 1, channel: 'FAM', dye: 'FAM', target: 'ORF1ab', enabled: true },
          { id: 2, channel: 'HEX', dye: 'HEX', target: 'N gene', enabled: true },
        ]
      },
      { 
        id: 5, 
        name: 'GenePlex Influenza Panel', 
        intendedUse: 'IVD', 
        version: '2.0.1',
        manufacturer: 'new-co',
        installDate: '2024-05-20',
        targets: [
          { id: 1, channel: 'FAM', dye: 'FAM', target: 'Influenza A', enabled: true },
          { id: 2, channel: 'HEX', dye: 'HEX', target: 'Influenza B', enabled: true },
          { id: 3, channel: 'Cal Red 610', dye: 'CR610', target: 'H1N1', enabled: true },
        ]
      },
      { 
        id: 6, 
        name: 'GenePlex STI Panel', 
        intendedUse: 'IVD', 
        version: '1.8.0',
        manufacturer: 'new-co',
        installDate: '2024-06-10',
        targets: [
          { id: 1, channel: 'FAM', dye: 'FAM', target: 'CT', enabled: true },
          { id: 2, channel: 'HEX', dye: 'HEX', target: 'NG', enabled: true },
          { id: 3, channel: 'Cal Red 610', dye: 'CR610', target: 'MG', enabled: true },
          { id: 4, channel: 'Quasar 670', dye: 'Q670', target: 'TV', enabled: true },
        ]
      },
    ],
    selectedAssay: null,
    showAddAssayModal: false,
    newAssay: {
      name: '',
      intendedUse: 'IVD',
      version: '',
      manufacturer: '',
      installDate: ''
    }
  });

  const tabs = [
    { id: 'general', label: 'General', icon: '⚙️', subTabs: [
      { id: 'general-permission', label: '기능별 권한 설정' }
    ]},
    { id: 'display', label: 'Display Setting', icon: '🖥️', subTabs: [
      { id: 'display-target', label: 'Target on/off' },
      { id: 'display-developer', label: 'Developer Setting' },
      { id: 'display-negative', label: 'Negative C(t) Value' }
    ]},
    { id: 'export', label: 'Export', icon: '📤', subTabs: [
      { id: 'export-hl7-transfer', label: 'HL7 Transfer Setting' },
      { id: 'export-hl7-abbrev', label: 'HL7 Abbreviation Setting' }
    ]},
    { id: 'print', label: 'Print', icon: '🖨️' },
    { id: 'assay', label: 'Assay Pack', icon: '🧬' },
  ];

  const updateSetting = (key, value) => {
    setSettings(prev => ({ ...prev, [key]: value }));
    setHasUnsavedChanges(true);
  };

  const updateCheckbox = (key, subKey) => {
    setSettings(prev => ({
      ...prev,
      [key]: { ...prev[key], [subKey]: !prev[key][subKey] }
    }));
    setHasUnsavedChanges(true);
  };

  const handleTabClick = (tabId) => {
    if (hasUnsavedChanges) {
      setPendingTab(tabId);
      setShowUnsavedAlert(true);
    } else {
      setActiveTab(tabId);
    }
  };

  const handleDiscardChanges = () => {
    setShowUnsavedAlert(false);
    setHasUnsavedChanges(false);
    setActiveTab(pendingTab);
    setPendingTab(null);
  };

  const handleSaveAndSwitch = () => {
    handleSave();
    setShowUnsavedAlert(false);
    setActiveTab(pendingTab);
    setPendingTab(null);
  };

  // 분석 탭에 영향을 주는 설정이 변경되었는지 확인
  const checkCriticalSettingsChanged = () => {
    const initial = initialCriticalSettings.current;
    return (
      settings.pcrRawDataType !== initial.pcrRawDataType ||
      settings.sampleId !== initial.sampleId ||
      settings.resultView !== initial.resultView ||
      settings.ctValueDigit !== initial.ctValueDigit ||
      settings.sampleIndexSetting !== initial.sampleIndexSetting ||
      targetOnOffChanged
    );
  };

  const handleSave = () => {
    // 분석 탭에 영향을 주는 설정이 변경된 경우 경고 팝업 표시
    if (checkCriticalSettingsChanged()) {
      setShowAnalysisTabWarning(true);
      return;
    }
    completeSave();
  };

  const completeSave = () => {
    // 초기값 업데이트
    initialCriticalSettings.current = {
      pcrRawDataType: settings.pcrRawDataType,
      sampleId: settings.sampleId,
      resultView: settings.resultView,
      ctValueDigit: settings.ctValueDigit,
      sampleIndexSetting: settings.sampleIndexSetting,
      targetOnOffChanged: false
    };
    setTargetOnOffChanged(false);
    setHasUnsavedChanges(false);
    setShowSaveSuccess(true);
    setTimeout(() => setShowSaveSuccess(false), 2000);
  };

  const handleConfirmAnalysisTabClose = () => {
    setShowAnalysisTabWarning(false);
    completeSave();
  };

  const handleCancelAnalysisTabClose = () => {
    setShowAnalysisTabWarning(false);
  };

  // Assay Pack 관련 함수
  const handleAddAssay = () => {
    if (!settings.newAssay.name || !settings.newAssay.version || !settings.newAssay.manufacturer || !settings.newAssay.installDate) {
      alert('모든 필수 항목을 입력해주세요.');
      return;
    }

    const newAssay = {
      id: settings.assayList.length + 1,
      name: settings.newAssay.name,
      intendedUse: settings.newAssay.intendedUse,
      version: settings.newAssay.version,
      manufacturer: settings.newAssay.manufacturer,
      installDate: settings.newAssay.installDate
    };

    setSettings(prev => ({
      ...prev,
      assayList: [...prev.assayList, newAssay],
      showAddAssayModal: false,
      newAssay: {
        name: '',
        intendedUse: 'IVD',
        version: '',
        manufacturer: '',
        installDate: ''
      }
    }));
    setHasUnsavedChanges(true);
  };

  const handleDeleteAssay = (assayId) => {
    if (confirm('선택한 Assay Pack을 삭제하시겠습니까?')) {
      setSettings(prev => ({
        ...prev,
        assayList: prev.assayList.filter(a => a.id !== assayId),
        selectedAssay: prev.selectedAssay === assayId ? null : prev.selectedAssay
      }));
      setHasUnsavedChanges(true);
    }
  };

  const updateNewAssay = (key, value) => {
    setSettings(prev => ({
      ...prev,
      newAssay: { ...prev.newAssay, [key]: value }
    }));
  };

  const handleClose = () => {
    if (hasUnsavedChanges) {
      setPendingTab('close');
      setShowUnsavedAlert(true);
    } else {
      setIsOpen(false);
    }
  };

  if (!isOpen) {
    return (
      <div style={{ padding: 40, textAlign: 'center' }}>
        <button 
          onClick={() => setIsOpen(true)}
          style={{ padding: '12px 24px', fontSize: 16, cursor: 'pointer', background: '#3b82f6', color: 'white', border: 'none', borderRadius: 8 }}
        >
          ⚙️ Settings 열기
        </button>
      </div>
    );
  }

  return (
    <div style={{
      position: 'fixed',
      top: 0, left: 0, right: 0, bottom: 0,
      background: 'rgba(0,0,0,0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: "'Pretendard', -apple-system, BlinkMacSystemFont, sans-serif",
      zIndex: 1000
    }}>
      <style>{`
        @import url('https://cdn.jsdelivr.net/gh/orioncactus/pretendard/dist/web/static/pretendard.css');
        
        * { box-sizing: border-box; }
        
        .popup-container {
          background: white;
          border-radius: 16px;
          box-shadow: 0 25px 50px -12px rgba(0,0,0,0.25);
          width: 1000px;
          height: 700px;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }
        
        .popup-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 24px;
          background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%);
          color: white;
        }
        
        .popup-header h1 {
          margin: 0;
          font-size: 20px;
          font-weight: 600;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        
        .close-btn {
          width: 36px;
          height: 36px;
          border: none;
          background: rgba(255,255,255,0.15);
          color: white;
          border-radius: 8px;
          cursor: pointer;
          font-size: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.15s ease;
        }
        
        .close-btn:hover {
          background: rgba(255,255,255,0.25);
        }
        
        .popup-body {
          display: flex;
          flex: 1;
          overflow: hidden;
        }
        
        /* Vertical Tabs */
        .vertical-tabs {
          width: 200px;
          background: #f8fafc;
          border-right: 1px solid #e2e8f0;
          padding: 16px 0;
          display: flex;
          flex-direction: column;
        }
        
        .tab-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 20px;
          cursor: pointer;
          color: #64748b;
          font-size: 14px;
          font-weight: 500;
          transition: all 0.15s ease;
          border-left: 3px solid transparent;
        }
        
        .tab-item:hover {
          background: #f1f5f9;
          color: #334155;
        }
        
        .tab-item.active {
          background: white;
          color: #1e40af;
          border-left-color: #3b82f6;
          font-weight: 600;
        }
        
        .tab-item.has-subtabs.active {
          background: #f1f5f9;
        }
        
        .sub-tabs {
          background: #f1f5f9;
          overflow: hidden;
          max-height: 0;
          transition: max-height 0.2s ease;
        }
        
        .sub-tabs.open {
          max-height: 200px;
        }
        
        .sub-tab-item {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 10px 20px 10px 44px;
          cursor: pointer;
          color: #64748b;
          font-size: 13px;
          transition: all 0.15s ease;
          border-left: 3px solid transparent;
        }
        
        .sub-tab-item::before {
          content: '└';
          color: #cbd5e1;
          font-size: 12px;
        }
        
        .sub-tab-item:hover {
          background: #e2e8f0;
          color: #334155;
        }
        
        .sub-tab-item.active {
          background: white;
          color: #1e40af;
          border-left-color: #3b82f6;
          font-weight: 500;
        }
        
        .tab-icon {
          font-size: 18px;
        }
        
        /* Tab Content */
        .tab-content {
          flex: 1;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }
        
        .tab-content-header {
          padding: 20px 24px;
          border-bottom: 1px solid #e2e8f0;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        
        .tab-content-header h2 {
          margin: 0;
          font-size: 18px;
          font-weight: 600;
          color: #1e293b;
        }
        
        .tab-content-body {
          flex: 1;
          overflow-y: auto;
          padding: 0;
        }
        
        .tab-content-footer {
          padding: 16px 24px;
          border-top: 1px solid #e2e8f0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 12px;
          background: #f8fafc;
        }
        
        .footer-status {
          flex: 1;
        }
        
        .status-unsaved {
          font-size: 13px;
          color: #f59e0b;
          display: flex;
          align-items: center;
          gap: 4px;
        }
        
        .status-success {
          font-size: 13px;
          color: #10b981;
          display: flex;
          align-items: center;
          gap: 4px;
        }
        
        .footer-buttons {
          display: flex;
          gap: 12px;
        }
        
        /* Settings Rows */
        .setting-row {
          display: flex;
          align-items: center;
          padding: 16px 24px;
          border-bottom: 1px solid #f1f5f9;
        }
        
        .setting-row:hover {
          background: #fafbfc;
        }
        
        .setting-row.sub-item {
          padding-left: 44px;
          background: #fafbfc;
        }
        
        .setting-row.sub-item .setting-label::before {
          content: '└';
          margin-right: 8px;
          color: #94a3b8;
        }
        
        .setting-row.disabled {
          opacity: 0.6;
        }
        
        .setting-row.disabled:hover {
          background: inherit;
        }
        
        /* Flow Button Group */
        .flow-button-group {
          display: flex;
          flex-direction: column;
          gap: 8px;
          width: 100%;
        }
        
        .flow-button {
          padding: 12px 16px;
          border: 2px solid #e2e8f0;
          border-radius: 8px;
          cursor: pointer;
          transition: all 0.15s ease;
          background: white;
        }
        
        .flow-button:hover {
          border-color: #94a3b8;
          background: #f8fafc;
        }
        
        .flow-button.selected {
          border-color: #3b82f6;
          background: #eff6ff;
        }
        
        .flow-button-label {
          font-size: 14px;
          font-weight: 600;
          color: #1e293b;
          margin-bottom: 4px;
        }
        
        .flow-button.selected .flow-button-label {
          color: #1d4ed8;
        }
        
        .flow-button-desc {
          font-size: 12px;
          color: #64748b;
        }
        
        .flow-button.selected .flow-button-desc {
          color: #3b82f6;
        }

        .flow-button.disabled {
          opacity: 0.5;
          cursor: not-allowed;
          background: #f1f5f9;
        }

        .flow-button.disabled:hover {
          border-color: #e2e8f0;
          background: #f1f5f9;
        }

        /* Tooltip */
        .tooltip-container {
          position: relative;
          display: inline-flex;
          align-items: center;
        }

        .tooltip-icon {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 18px;
          height: 18px;
          border-radius: 50%;
          background: #3b82f6;
          color: white;
          font-size: 12px;
          font-weight: 600;
          cursor: help;
          margin-left: 8px;
        }

        .tooltip-content {
          position: absolute;
          left: 28px;
          top: 50%;
          transform: translateY(-50%);
          background: #1e293b;
          color: white;
          padding: 12px 16px;
          border-radius: 8px;
          font-size: 13px;
          line-height: 1.6;
          white-space: nowrap;
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.2s, visibility 0.2s;
          z-index: 1000;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }

        .tooltip-content::before {
          content: '';
          position: absolute;
          left: -6px;
          top: 50%;
          transform: translateY(-50%);
          border-width: 6px 6px 6px 0;
          border-style: solid;
          border-color: transparent #1e293b transparent transparent;
        }

        .tooltip-container:hover .tooltip-content {
          opacity: 1;
          visibility: visible;
        }

        .tooltip-content strong {
          display: block;
          margin-bottom: 6px;
          font-size: 14px;
        }
        
        .setting-label {
          flex: 0 0 220px;
          font-size: 14px;
          font-weight: 500;
          color: #1e293b;
        }
        
        .setting-label small {
          display: block;
          font-size: 12px;
          color: #94a3b8;
          font-weight: 400;
          margin-top: 2px;
        }
        
        .setting-control {
          flex: 1;
          display: flex;
          align-items: center;
          gap: 12px;
        }
        
        /* Subsection Title */
        .subsection-title {
          padding: 12px 24px;
          font-size: 12px;
          font-weight: 600;
          color: #3b82f6;
          background: #eff6ff;
          border-bottom: 1px solid #dbeafe;
          text-transform: uppercase;
          letter-spacing: 0.5px;
        }
        
        /* Form Controls */
        select {
          appearance: none;
          background: #f8fafc url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%2364748b' d='M2 4l4 4 4-4'/%3E%3C/svg%3E") no-repeat right 12px center;
          border: 1px solid #e2e8f0;
          border-radius: 6px;
          padding: 8px 32px 8px 12px;
          font-size: 13px;
          color: #334155;
          min-width: 180px;
          cursor: pointer;
        }
        
        select:focus { outline: none; border-color: #3b82f6; }
        
        .toggle {
          position: relative;
          width: 44px;
          height: 24px;
          background: #e2e8f0;
          border-radius: 12px;
          cursor: pointer;
          transition: background 0.2s ease;
        }
        
        .toggle.active { background: #3b82f6; }
        
        .toggle::after {
          content: '';
          position: absolute;
          top: 2px;
          left: 2px;
          width: 20px;
          height: 20px;
          background: white;
          border-radius: 50%;
          box-shadow: 0 1px 3px rgba(0,0,0,0.15);
          transition: transform 0.2s ease;
        }
        
        .toggle.active::after { transform: translateX(20px); }
        
        .toggle-label {
          font-size: 12px;
          color: #64748b;
        }
        
        .radio-group {
          display: flex;
          gap: 6px;
          flex-wrap: wrap;
        }
        
        .radio-item {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 6px;
          cursor: pointer;
          font-size: 13px;
          color: #475569;
          transition: all 0.15s ease;
        }
        
        .radio-item:hover { border-color: #cbd5e1; }
        .radio-item.selected { 
          background: #eff6ff; 
          border-color: #3b82f6; 
          color: #1d4ed8;
        }
        
        .radio-dot {
          width: 14px;
          height: 14px;
          border: 2px solid #cbd5e1;
          border-radius: 50%;
          position: relative;
        }
        
        .radio-item.selected .radio-dot {
          border-color: #3b82f6;
        }
        
        .radio-item.selected .radio-dot::after {
          content: '';
          position: absolute;
          top: 2px;
          left: 2px;
          width: 6px;
          height: 6px;
          background: #3b82f6;
          border-radius: 50%;
        }
        
        .checkbox-group {
          display: flex;
          gap: 12px;
        }
        
        .checkbox-item {
          display: flex;
          align-items: center;
          gap: 8px;
          cursor: pointer;
          font-size: 13px;
          color: #475569;
        }
        
        .checkbox-box {
          width: 18px;
          height: 18px;
          border: 2px solid #cbd5e1;
          border-radius: 4px;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: all 0.15s ease;
        }
        
        .checkbox-item.checked .checkbox-box {
          background: #3b82f6;
          border-color: #3b82f6;
        }
        
        .checkbox-box svg {
          opacity: 0;
          transform: scale(0.5);
          transition: all 0.15s ease;
        }
        
        .checkbox-item.checked .checkbox-box svg {
          opacity: 1;
          transform: scale(1);
        }
        
        .text-input {
          padding: 8px 12px;
          border: 1px solid #e2e8f0;
          border-radius: 6px;
          font-size: 13px;
          color: #334155;
          min-width: 200px;
        }
        
        .text-input:focus { outline: none; border-color: #3b82f6; }
        
        .folder-path-control {
          display: flex;
          gap: 8px;
          align-items: center;
        }
        
        .path-input {
          min-width: 280px;
          background: #f8fafc;
        }
        
        .file-btn {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 8px 14px;
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 6px;
          font-size: 13px;
          color: #64748b;
          cursor: pointer;
          transition: all 0.15s ease;
        }
        
        .file-btn:hover {
          border-color: #3b82f6;
          color: #3b82f6;
        }
        
        /* Buttons */
        .btn {
          padding: 10px 20px;
          border-radius: 6px;
          font-size: 14px;
          font-weight: 500;
          cursor: pointer;
          transition: all 0.15s ease;
        }
        
        .btn-secondary {
          background: white;
          border: 1px solid #e2e8f0;
          color: #64748b;
        }
        
        .btn-secondary:hover { background: #f8fafc; }
        
        .btn-primary {
          background: #3b82f6;
          border: none;
          color: white;
        }
        
        .btn-primary:hover { background: #2563eb; }
        
        .btn-primary:disabled {
          background: #94a3b8;
          cursor: not-allowed;
        }
        
        /* Alert Modal */
        .alert-overlay {
          position: absolute;
          top: 0; left: 0; right: 0; bottom: 0;
          background: rgba(0,0,0,0.4);
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 10;
        }
        
        .alert-modal {
          background: white;
          border-radius: 12px;
          padding: 24px;
          width: 400px;
          box-shadow: 0 20px 40px rgba(0,0,0,0.2);
        }
        
        .alert-modal h3 {
          margin: 0 0 12px;
          font-size: 18px;
          color: #1e293b;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        
        .alert-modal p {
          margin: 0 0 20px;
          font-size: 14px;
          color: #64748b;
          line-height: 1.5;
        }
        
        .alert-buttons {
          display: flex;
          gap: 10px;
          justify-content: flex-end;
        }
        
        .btn-danger {
          background: #ef4444;
          border: none;
          color: white;
        }
        
        .btn-danger:hover { background: #dc2626; }
        
        /* Success Toast */
        .success-toast {
          position: absolute;
          top: 80px;
          right: 24px;
          background: #10b981;
          color: white;
          padding: 12px 20px;
          border-radius: 8px;
          font-size: 14px;
          display: flex;
          align-items: center;
          gap: 8px;
          box-shadow: 0 4px 12px rgba(16,185,129,0.3);
          animation: slideIn 0.3s ease;
        }
        
        @keyframes slideIn {
          from { transform: translateX(100px); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
        
        /* Info Notice */
        .info-notice {
          display: flex;
          gap: 10px;
          padding: 12px 16px;
          margin: 12px 24px;
          background: #eff6ff;
          border: 1px solid #bfdbfe;
          border-radius: 8px;
          border-left: 3px solid #3b82f6;
        }
        
        .info-notice .info-icon { font-size: 16px; }
        
        .info-notice .info-text {
          font-size: 13px;
          color: #1e40af;
          line-height: 1.4;
        }
        
        .info-notice .info-text strong {
          display: block;
          margin-bottom: 2px;
        }
        
        .info-notice .info-text p { margin: 0; color: #3b82f6; }
        
        /* Required hint */
        .required-hint {
          color: #ef4444;
          font-weight: 500;
        }
        
        .warning-text {
          font-size: 12px;
          color: #ef4444;
          background: #fef2f2;
          padding: 4px 8px;
          border-radius: 4px;
        }
        
        /* Assay Pack Tables */
        .assay-container {
          display: flex;
          flex-direction: column;
          gap: 16px;
          padding: 16px 24px;
        }
        
        .assay-panel {
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          overflow: hidden;
        }
        
        .panel-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 16px;
          background: #f8fafc;
          border-bottom: 1px solid #e2e8f0;
        }
        
        .panel-header h3 {
          margin: 0;
          font-size: 14px;
          font-weight: 600;
          color: #1e293b;
        }
        
        .panel-subtitle {
          font-size: 12px;
          color: #64748b;
        }
        
        .search-box {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 10px;
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 6px;
        }
        
        .search-box input {
          border: none;
          outline: none;
          font-size: 13px;
          width: 140px;
        }
        
        .data-table table {
          width: 100%;
          border-collapse: collapse;
        }
        
        .data-table th {
          padding: 10px 12px;
          text-align: left;
          font-size: 11px;
          font-weight: 600;
          color: #64748b;
          text-transform: uppercase;
          background: #f8fafc;
          border-bottom: 1px solid #e2e8f0;
        }
        
        .data-table td {
          padding: 10px 12px;
          font-size: 13px;
          color: #334155;
          border-bottom: 1px solid #f1f5f9;
        }
        
        .data-table tr:hover { background: #fafbfc; }
        .data-table tr.selected { background: #eff6ff; }
        
        .badge {
          display: inline-block;
          padding: 2px 8px;
          font-size: 11px;
          font-weight: 600;
          color: #059669;
          background: #d1fae5;
          border-radius: 10px;
        }
        
        .badge.dye {
          color: #7c3aed;
          background: #ede9fe;
        }
        
        .inline-input {
          padding: 4px 8px;
          border: 1px solid #e2e8f0;
          border-radius: 4px;
          font-size: 12px;
          font-family: monospace;
          width: 80px;
        }
        
        .inline-input:focus {
          outline: none;
          border-color: #3b82f6;
        }
        
        .empty-state {
          padding: 40px;
          text-align: center;
          color: #94a3b8;
        }
        
        .empty-state .empty-icon {
          font-size: 28px;
          margin-bottom: 8px;
        }
        
        .empty-state p {
          margin: 0;
          font-size: 13px;
          line-height: 1.5;
        }
        
        /* Unsaved indicator */
        .unsaved-dot {
          width: 8px;
          height: 8px;
          background: #f59e0b;
          border-radius: 50%;
          margin-left: 8px;
        }
        
        /* Permission Table */
        .permission-table {
          width: 100%;
          border-collapse: collapse;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          overflow: hidden;
        }
        
        .permission-table th {
          padding: 14px 16px;
          text-align: left;
          font-size: 13px;
          font-weight: 600;
          color: #1e293b;
          background: #f8fafc;
          border-bottom: 2px solid #e2e8f0;
        }
        
        .permission-table td {
          padding: 16px;
          border-bottom: 1px solid #f1f5f9;
          vertical-align: middle;
        }
        
        .permission-table tr:hover {
          background: #fafbfc;
        }
        
        .permission-table tr:last-child td {
          border-bottom: none;
        }
        
        .feature-name {
          font-size: 14px;
          font-weight: 500;
          color: #1e293b;
          margin-bottom: 2px;
        }
        
        .feature-desc {
          font-size: 12px;
          color: #94a3b8;
        }
        
        /* Target On/Off Container */
        .target-onoff-container {
          display: flex;
          gap: 16px;
          padding: 16px 24px;
          height: calc(100% - 80px);
        }
        
        .target-panel {
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }
        
        .assay-list-panel {
          flex: 0 0 280px;
        }
        
        .target-list-panel {
          flex: 1;
        }
        
        .panel-search {
          padding: 12px;
          border-bottom: 1px solid #e2e8f0;
          background: #fafbfc;
        }
        
        .assay-list {
          flex: 1;
          overflow-y: auto;
        }
        
        .assay-list-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 12px 16px;
          cursor: pointer;
          border-bottom: 1px solid #f1f5f9;
          transition: all 0.15s ease;
        }
        
        .assay-list-item:hover {
          background: #f8fafc;
        }
        
        .assay-list-item.selected {
          background: #eff6ff;
          border-left: 3px solid #3b82f6;
        }
        
        .assay-item-info {
          flex: 1;
        }
        
        .assay-item-name {
          font-size: 13px;
          font-weight: 500;
          color: #1e293b;
          margin-bottom: 4px;
        }
        
        .assay-item-meta {
          display: flex;
          align-items: center;
          gap: 8px;
        }
        
        .target-count {
          font-size: 11px;
          color: #94a3b8;
        }
        
        .assay-item-arrow {
          font-size: 18px;
          color: #cbd5e1;
        }
        
        .assay-list-item.selected .assay-item-arrow {
          color: #3b82f6;
        }
        
        .target-list {
          flex: 1;
          display: flex;
          flex-direction: column;
        }
        
        .target-list-header {
          display: flex;
          align-items: center;
          padding: 10px 16px;
          background: #f8fafc;
          border-bottom: 1px solid #e2e8f0;
          font-size: 11px;
          font-weight: 600;
          color: #64748b;
          text-transform: uppercase;
        }
        
        .target-list-row {
          display: flex;
          align-items: center;
          padding: 12px 16px;
          border-bottom: 1px solid #f1f5f9;
        }
        
        .target-list-row:hover {
          background: #fafbfc;
        }
        
        .th-channel, .td-channel { flex: 0 0 120px; }
        .th-dye, .td-dye { flex: 0 0 80px; }
        .th-target, .td-target { flex: 1; }
        .th-toggle, .td-toggle { flex: 0 0 100px; text-align: center; }
        
        .td-channel {
          font-size: 12px;
          color: #64748b;
        }
        
        .td-target {
          font-size: 13px;
          font-weight: 500;
          color: #1e293b;
        }
        
        .td-toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
        }
        
        .toggle-status {
          font-size: 11px;
          color: #64748b;
          min-width: 24px;
        }
        
        .target-actions {
          display: flex;
          justify-content: flex-end;
          gap: 8px;
          padding: 12px 16px;
          border-top: 1px solid #e2e8f0;
          background: #f8fafc;
          margin-top: auto;
        }
        
        /* Assay On/Off Panel */
        .assay-onoff-panel {
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          overflow: hidden;
        }
        
        .assay-onoff-list {
          max-height: 350px;
          overflow-y: auto;
        }
        
        .assay-onoff-header {
          display: flex;
          align-items: center;
          padding: 10px 16px;
          background: #f8fafc;
          border-bottom: 1px solid #e2e8f0;
          font-size: 11px;
          font-weight: 600;
          color: #64748b;
          text-transform: uppercase;
          position: sticky;
          top: 0;
        }
        
        .assay-onoff-row {
          display: flex;
          align-items: center;
          padding: 12px 16px;
          border-bottom: 1px solid #f1f5f9;
        }
        
        .assay-onoff-row:hover {
          background: #fafbfc;
        }
        
        .th-assay-name, .td-assay-name { flex: 1; }
        .th-intended-use, .td-intended-use { flex: 0 0 120px; text-align: center; }
        .th-assay-toggle, .td-assay-toggle { flex: 0 0 120px; text-align: center; }
        
        .td-assay-name {
          font-size: 13px;
          font-weight: 500;
          color: #1e293b;
        }
        
        .td-assay-toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
        }
        
        .assay-onoff-footer {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 12px 16px;
          border-top: 1px solid #e2e8f0;
          background: #f8fafc;
        }
        
        /* Changed Settings List in Warning */
        .changed-settings-list {
          background: #fef3c7;
          border: 1px solid #fbbf24;
          border-radius: 8px;
          padding: 12px 16px;
          margin-bottom: 16px;
        }
        
        .changed-settings-title {
          font-size: 12px;
          font-weight: 600;
          color: #92400e;
          margin-bottom: 8px;
        }
        
        .changed-settings-list ul {
          margin: 0;
          padding-left: 20px;
        }
        
        .changed-settings-list li {
          font-size: 13px;
          color: #b45309;
          margin-bottom: 4px;
        }
        
        .changed-settings-list li:last-child {
          margin-bottom: 0;
        }
        
        /* Preview Section */
        .preview-section {
          margin: 16px 24px;
          padding: 16px;
          background: #f8fafc;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
        }
        
        .preview-title {
          font-size: 13px;
          font-weight: 600;
          color: #1e293b;
          margin-bottom: 12px;
        }
        
        .preview-path {
          display: flex;
          align-items: center;
          flex-wrap: wrap;
          gap: 2px;
          padding: 12px;
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 6px;
          font-family: 'Consolas', monospace;
          font-size: 13px;
          margin-bottom: 10px;
        }
        
        .path-segment {
          padding: 2px 4px;
          border-radius: 3px;
        }
        
        .path-base { color: #64748b; }
        .path-folder { background: #fef3c7; color: #b45309; }
        .path-prefix { background: #dbeafe; color: #1d4ed8; }
        .path-filename { color: #1e293b; font-weight: 500; }
        .path-ext { color: #059669; }
        .path-separator { color: #94a3b8; }
        
        .preview-example {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 12px;
        }
        
        .preview-example-label {
          color: #64748b;
        }
        
        .preview-example code {
          background: #e2e8f0;
          padding: 4px 8px;
          border-radius: 4px;
          font-family: 'Consolas', monospace;
          font-size: 11px;
          color: #334155;
        }
        
        /* HL7 Abbreviation Container */
        .hl7-abbrev-container {
          display: flex;
          gap: 16px;
          padding: 16px 24px;
          height: 320px;
        }
        
        .hl7-panel {
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          display: flex;
          flex-direction: column;
          overflow: hidden;
        }
        
        .hl7-panel.assay-panel {
          flex: 0 0 280px;
        }
        
        .hl7-panel.target-panel {
          flex: 1;
        }

        .hl7-panel .data-table table tbody tr {
          cursor: pointer;
          transition: background-color 0.15s;
        }

        .hl7-panel .data-table table tbody tr:hover {
          background-color: #f1f5f9;
        }

        .hl7-panel .data-table table tbody tr.selected {
          background-color: #dbeafe;
        }

        .hl7-panel .data-table table tbody tr.selected:hover {
          background-color: #bfdbfe;
        }

        /* HL7 Abbreviation Vertical Layout */
        .hl7-abbrev-vertical {
          display: flex;
          flex-direction: column;
          gap: 20px;
          padding: 0 24px 24px;
        }

        .hl7-section {
          background: white;
          border: 1px solid #e2e8f0;
          border-radius: 8px;
          overflow: hidden;
        }

        .hl7-section .section-header {
          display: flex;
          align-items: center;
          padding: 12px 16px;
          background: #f8fafc;
          border-bottom: 1px solid #e2e8f0;
        }

        .hl7-section .section-header h3 {
          margin: 0;
          font-size: 14px;
          font-weight: 600;
          color: #1e293b;
        }

        .hl7-section .data-table {
          padding: 0;
        }

        .hl7-section .data-table table {
          margin: 0;
        }

        .hl7-section .data-table table tbody tr {
          cursor: pointer;
          transition: background-color 0.15s;
        }

        .hl7-section .data-table table tbody tr:hover {
          background-color: #f1f5f9;
        }

        .hl7-section .data-table table tbody tr.selected {
          background-color: #dbeafe;
        }

        .hl7-section .data-table table tbody tr.selected:hover {
          background-color: #bfdbfe;
        }

        .empty-state-inline {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          padding: 24px;
          color: #64748b;
          font-size: 14px;
        }

        .empty-state-inline .empty-icon {
          font-size: 18px;
        }
        
        .assay-code-display {
          font-size: 11px;
          color: #64748b;
          font-family: monospace;
        }
      `}</style>

      <div className="popup-container">
        {/* Header */}
        <div className="popup-header">
          <h1>⚙️ Settings</h1>
          <button className="close-btn" onClick={handleClose}>✕</button>
        </div>

        {/* Body */}
        <div className="popup-body">
          {/* Vertical Tabs */}
          <div className="vertical-tabs">
            {tabs.map(tab => (
              <React.Fragment key={tab.id}>
                <div 
                  className={`tab-item ${activeTab === tab.id || activeTab.startsWith(tab.id + '-') ? 'active' : ''} ${tab.subTabs ? 'has-subtabs' : ''}`}
                  onClick={() => handleTabClick(tab.id)}
                >
                  <span className="tab-icon">{tab.icon}</span>
                  <span>{tab.label}</span>
                  {hasUnsavedChanges && (activeTab === tab.id || activeTab.startsWith(tab.id + '-')) && <div className="unsaved-dot" />}
                  {tab.subTabs && (
                    <span style={{ marginLeft: 'auto', fontSize: 10, color: '#94a3b8' }}>
                      {activeTab === tab.id || activeTab.startsWith(tab.id + '-') ? '▼' : '▶'}
                    </span>
                  )}
                </div>
                {tab.subTabs && (
                  <div className={`sub-tabs ${activeTab === tab.id || activeTab.startsWith(tab.id + '-') ? 'open' : ''}`}>
                    {tab.subTabs.map(subTab => (
                      <div 
                        key={subTab.id}
                        className={`sub-tab-item ${activeTab === subTab.id ? 'active' : ''}`}
                        onClick={() => handleTabClick(subTab.id)}
                      >
                        {subTab.label}
                      </div>
                    ))}
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Tab Content */}
          <div className="tab-content">
            <div className="tab-content-header">
              <h2>
                {(() => {
                  const mainTab = tabs.find(t => t.id === activeTab || activeTab.startsWith(t.id + '-'));
                  const subTab = mainTab?.subTabs?.find(s => s.id === activeTab);
                  return subTab ? `${mainTab.label} > ${subTab.label}` : mainTab?.label;
                })()}
              </h2>
            </div>

            <div className="tab-content-body">
              {/* General Tab */}
              {activeTab === 'general' && (
                <>
                  <div className="setting-row">
                    <div className="setting-label">Language</div>
                    <div className="setting-control">
                      <select value={settings.language} onChange={(e) => updateSetting('language', e.target.value)}>
                        <option value="">선택하세요</option>
                        <option value="ko">한국어</option>
                        <option value="en">English</option>
                        <option value="et">Estonian</option>
                        <option value="fr">French</option>
                        <option value="de">German</option>
                        <option value="it">Italian</option>
                        <option value="lv">Latvian</option>
                        <option value="lt">Lithuanian</option>
                        <option value="pt">Portuguese</option>
                        <option value="es">Spanish</option>
                        <option value="tr">Turkish</option>
                      </select>
                    </div>
                  </div>

                  <div className="setting-row">
                    <div className="setting-label">
                      PCR Raw Data Type
                      <small>PCR 장비 SW설정</small>
                    </div>
                    <div className="setting-control">
                      <select value={settings.pcrRawDataType} onChange={(e) => updateSetting('pcrRawDataType', e.target.value)}>
                        <option value="">선택하세요</option>
                        <option value="type1">Type 1</option>
                        <option value="type2">Type 2</option>
                      </select>
                    </div>
                  </div>

                  <div className="setting-row">
                    <div className="setting-label">타겟 약어 사용</div>
                    <div className="setting-control">
                      <div className={`toggle ${settings.targetAbbreviation ? 'active' : ''}`} onClick={() => updateSetting('targetAbbreviation', !settings.targetAbbreviation)} />
                      <span className="toggle-label">{settings.targetAbbreviation ? 'ON' : 'OFF'}</span>
                    </div>
                  </div>

                  <div className="subsection-title">
                    데이터 불러오기 방식
                    <div className="tooltip-container">
                      <div className="tooltip-icon">i</div>
                      <div className="tooltip-content">
                        <strong>다중 선택 규칙</strong>
                        • 여러 방식을 동시에 선택할 수 있습니다<br/>
                        • LIMS(.plrn)과 CSV는 동시에 선택할 수 없습니다<br/>
                        • 바코드만 단독으로 선택할 수 없습니다<br/>
                        &nbsp;&nbsp;(다른 방식과 함께 사용 필요)
                      </div>
                    </div>
                  </div>

                  <div className="setting-row">
                    <div className="setting-label">
                      불러오기 방식 선택
                      <small>복수 선택 가능</small>
                    </div>
                    <div className="setting-control">
                      <div className="flow-button-group">
                        {[
                          { key: 'manual', label: 'Manual', desc: 'Plate Setting을 수동으로 설정' },
                          { key: 'preset', label: 'Preset', desc: '저장된 Plate Setting 사용' },
                          { key: 'plrn', label: 'LIMS(.plrn) 파일', desc: 'plrn 파일로 직접 불러오기' },
                          { key: 'csv', label: 'CSV', desc: 'CSV 파일로 불러오기' },
                          { key: 'barcode', label: '바코드로 불러오기', desc: 'Plate Barcode 스캔으로 불러오기' }
                        ].map(opt => {
                          const isSelected = settings.loadingMethods[opt.key];
                          // PLRN과 CSV는 상호 배타적
                          const isDisabled = 
                            (opt.key === 'plrn' && settings.loadingMethods.csv) ||
                            (opt.key === 'csv' && settings.loadingMethods.plrn);
                          
                          return (
                            <div 
                              key={opt.key} 
                              className={`flow-button ${isSelected ? 'selected' : ''} ${isDisabled ? 'disabled' : ''}`}
                              onClick={() => {
                                if (isDisabled) return;
                                
                                const newMethods = { ...settings.loadingMethods };
                                newMethods[opt.key] = !newMethods[opt.key];
                                
                                // PLRN 선택 시 CSV 해제
                                if (opt.key === 'plrn' && newMethods[opt.key]) {
                                  newMethods.csv = false;
                                }
                                // CSV 선택 시 PLRN 해제
                                if (opt.key === 'csv' && newMethods[opt.key]) {
                                  newMethods.plrn = false;
                                }
                                
                                updateSetting('loadingMethods', newMethods);
                              }}
                            >
                              <div className="flow-button-label">{opt.label}</div>
                              <div className="flow-button-desc">{opt.desc}</div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>

                  {/* 바코드 경고 메시지 */}
                  {settings.loadingMethods.barcode && 
                   !settings.loadingMethods.manual && 
                   !settings.loadingMethods.preset && 
                   !settings.loadingMethods.plrn && 
                   !settings.loadingMethods.csv && (
                    <div className="setting-row" style={{ background: '#fef3c7', border: '1px solid #fbbf24' }}>
                      <div className="setting-label">
                        <span style={{ color: '#92400e', fontWeight: 600 }}>⚠️ 경고</span>
                      </div>
                      <div className="setting-control">
                        <div style={{ color: '#92400e', fontSize: '13px', lineHeight: '1.5' }}>
                          바코드만 선택된 상태입니다. 바코드 읽기 실패 시를 대비하여 <strong>Manual, Preset, LIMS(.plrn), CSV 중 최소 하나 이상</strong>을 함께 선택해주세요.
                        </div>
                      </div>
                    </div>
                  )}

                  {/* 선택된 방식 요약 */}
                  <div className="setting-row" style={{ background: '#f0f9ff' }}>
                    <div className="setting-label">
                      선택된 방식
                      <small>현재 활성화된 불러오기 방식</small>
                    </div>
                    <div className="setting-control">
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                        {Object.entries(settings.loadingMethods)
                          .filter(([_, isSelected]) => isSelected)
                          .map(([key]) => {
                            const labels = {
                              manual: 'Manual',
                              preset: 'Preset', 
                              plrn: 'LIMS(.plrn)',
                              csv: 'CSV',
                              barcode: '바코드'
                            };
                            return (
                              <span key={key} style={{
                                padding: '4px 12px',
                                background: '#2563eb',
                                color: 'white',
                                borderRadius: '16px',
                                fontSize: '12px',
                                fontWeight: 500
                              }}>
                                {labels[key]}
                              </span>
                            );
                          })}
                        {!Object.values(settings.loadingMethods).some(v => v) && (
                          <span style={{ color: '#ef4444', fontSize: '13px', fontWeight: 500 }}>⚠️ 최소 하나의 방식을 선택하세요</span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* CSV 선택 시 Plate Setting 체크박스 표시 */}
                  {settings.loadingMethods.csv && (
                    <>
                      <div className="setting-row" style={{ background: '#f0fdf4' }}>
                        <div className="setting-label">
                          Plate Setting
                          <small>CSV 사용 시 Plate Setting 선택</small>
                        </div>
                        <div className="setting-control">
                          <div className="checkbox-group">
                            {['manual', 'preset'].map(key => (
                              <div key={key} className={`checkbox-item ${settings.plateSetting[key] ? 'checked' : ''}`} onClick={() => updateCheckbox('plateSetting', key)}>
                                <div className="checkbox-box">
                                  <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                                    <path d="M1 5L4.5 8.5L11 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                  </svg>
                                </div>
                                {key.charAt(0).toUpperCase() + key.slice(1)}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="setting-row" style={{ background: '#f0fdf4' }}>
                        <div className="setting-label">
                          csv File Open Option
                          <small>CSV 파일 열기 옵션</small>
                        </div>
                        <div className="setting-control">
                          <div className="radio-group">
                            {['Sample No', 'Patient Id', 'Name'].map(opt => (
                              <div key={opt} className={`radio-item ${settings.csvFileOpenOption === opt ? 'selected' : ''}`} onClick={() => updateSetting('csvFileOpenOption', opt)}>
                                <div className="radio-dot" />
                                {opt}
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </>
                  )}

                  {/* plrn 또는 barcode 선택 시 Sample ID 표시 */}
                  {(settings.loadingMethods.plrn || settings.loadingMethods.barcode) && (
                    <div className="setting-row" style={{ background: '#f0fdf4' }}>
                      <div className="setting-label">
                        Sample ID
                        <small>plrn 또는 바코드 선택 시 활성화</small>
                      </div>
                      <div className="setting-control">
                        <div className="radio-group">
                          {[{value: 'plrn', label: 'from LIMS(.plrn)'}, {value: 'pcr data', label: 'from PCR Raw Data'}].map(opt => (
                            <div key={opt.value} className={`radio-item ${settings.sampleId === opt.value ? 'selected' : ''}`} onClick={() => updateSetting('sampleId', opt.value)}>
                              <div className="radio-dot" />
                              {opt.label}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="subsection-title">Folder Setting</div>

                  <div className="setting-row">
                    <div className="setting-label">
                      Open PCR Data File Folder Path
                      <small>PCR 데이터 파일 열기 경로</small>
                    </div>
                    <div className="setting-control">
                      <div className="folder-path-control">
                        <input type="text" className="text-input path-input" placeholder="폴더 경로를 선택하세요" value={settings.openPcrDataFileFolderPath} readOnly />
                        <button className="file-btn">📁 찾아보기</button>
                      </div>
                    </div>
                  </div>

                  <div className="setting-row">
                    <div className="setting-label">
                      Open LIMS(.plrn) File Folder Path
                      <small>LIMS 파일 열기 경로</small>
                    </div>
                    <div className="setting-control">
                      <div className="folder-path-control">
                        <input type="text" className="text-input path-input" placeholder="폴더 경로를 선택하세요" value={settings.openLimsFileFolderPath} readOnly />
                        <button className="file-btn">📁 찾아보기</button>
                      </div>
                    </div>
                  </div>

                  <div className="setting-row">
                    <div className="setting-label">
                      Export Folder Path
                      <small>결과 파일 내보내기 경로</small>
                    </div>
                    <div className="setting-control">
                      <div className="folder-path-control">
                        <input type="text" className="text-input path-input" placeholder="C:\Seegene" value={settings.exportFolderPath} readOnly />
                        <button className="file-btn">📁 찾아보기</button>
                      </div>
                    </div>
                  </div>

                  <div className="setting-row">
                    <div className="setting-label">
                      Save Folder Path
                      <small>파일 저장 경로</small>
                    </div>
                    <div className="setting-control">
                      <div className="folder-path-control">
                        <input type="text" className="text-input path-input" placeholder="폴더 경로를 선택하세요" value={settings.saveFolderPath} readOnly />
                        <button className="file-btn">📁 찾아보기</button>
                      </div>
                    </div>
                  </div>

                  <div className="setting-row sub-item">
                    <div className="setting-label">
                      Save WorkList Folder Path
                      <small>WorkList 저장 경로</small>
                    </div>
                    <div className="setting-control">
                      <div className="folder-path-control">
                        <input type="text" className="text-input path-input" placeholder="폴더 경로를 선택하세요" value={settings.saveWorkListFolderPath} readOnly />
                        <button className="file-btn">📁 찾아보기</button>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {/* General - 기능별 권한 설정 서브탭 */}
              {activeTab === 'general-permission' && (
                <>
                  <div className="info-notice">
                    <div className="info-icon">🔐</div>
                    <div className="info-text">
                      <strong>기능별 권한 설정</strong>
                      <p>각 기능에 대해 Admin과 User의 접근 권한을 설정합니다.</p>
                    </div>
                  </div>

                  <div style={{ padding: '16px 24px' }}>
                    <table className="permission-table">
                      <thead>
                        <tr>
                          <th style={{ width: '50%' }}>기능</th>
                          <th style={{ width: '25%', textAlign: 'center' }}>Admin</th>
                          <th style={{ width: '25%', textAlign: 'center' }}>User</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <div className="feature-name">기능 A</div>
                            <div className="feature-desc">기능 A에 대한 설명</div>
                          </td>
                          <td style={{ textAlign: 'center' }}>
                            <div className="checkbox-item checked" style={{ justifyContent: 'center' }}>
                              <div className="checkbox-box">
                                <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                                  <path d="M1 5L4.5 8.5L11 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                              </div>
                            </div>
                          </td>
                          <td style={{ textAlign: 'center' }}>
                            <div className="checkbox-item checked" style={{ justifyContent: 'center' }}>
                              <div className="checkbox-box">
                                <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                                  <path d="M1 5L4.5 8.5L11 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="feature-name">기능 B</div>
                            <div className="feature-desc">기능 B에 대한 설명</div>
                          </td>
                          <td style={{ textAlign: 'center' }}>
                            <div className="checkbox-item checked" style={{ justifyContent: 'center' }}>
                              <div className="checkbox-box">
                                <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                                  <path d="M1 5L4.5 8.5L11 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                              </div>
                            </div>
                          </td>
                          <td style={{ textAlign: 'center' }}>
                            <div className="checkbox-item" style={{ justifyContent: 'center' }}>
                              <div className="checkbox-box">
                                <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                                  <path d="M1 5L4.5 8.5L11 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="feature-name">기능 C</div>
                            <div className="feature-desc">기능 C에 대한 설명</div>
                          </td>
                          <td style={{ textAlign: 'center' }}>
                            <div className="checkbox-item checked" style={{ justifyContent: 'center' }}>
                              <div className="checkbox-box">
                                <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                                  <path d="M1 5L4.5 8.5L11 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                              </div>
                            </div>
                          </td>
                          <td style={{ textAlign: 'center' }}>
                            <div className="checkbox-item checked" style={{ justifyContent: 'center' }}>
                              <div className="checkbox-box">
                                <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                                  <path d="M1 5L4.5 8.5L11 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <div className="feature-name">기능 D</div>
                            <div className="feature-desc">기능 D에 대한 설명</div>
                          </td>
                          <td style={{ textAlign: 'center' }}>
                            <div className="checkbox-item checked" style={{ justifyContent: 'center' }}>
                              <div className="checkbox-box">
                                <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                                  <path d="M1 5L4.5 8.5L11 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                              </div>
                            </div>
                          </td>
                          <td style={{ textAlign: 'center' }}>
                            <div className="checkbox-item" style={{ justifyContent: 'center' }}>
                              <div className="checkbox-box">
                                <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                                  <path d="M1 5L4.5 8.5L11 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </>
              )}

              {/* Display Setting Tab */}
              {activeTab === 'display' && (
                <>
                  <div className="setting-row">
                    <div className="setting-label">Result View</div>
                    <div className="setting-control">
                      <div className="radio-group">
                        {['Simple', 'Analysis'].map(opt => (
                          <div key={opt} className={`radio-item ${settings.resultView === opt ? 'selected' : ''}`} onClick={() => updateSetting('resultView', opt)}>
                            <div className="radio-dot" />
                            {opt}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="setting-row">
                    <div className="setting-label">Well Table</div>
                    <div className="setting-control">
                      <div className="radio-group">
                        {['세로', '가로'].map(opt => (
                          <div key={opt} className={`radio-item ${settings.wellTable === opt ? 'selected' : ''}`} onClick={() => updateSetting('wellTable', opt)}>
                            <div className="radio-dot" />
                            {opt}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="setting-row">
                    <div className="setting-label">Result Display</div>
                    <div className="setting-control">
                      <div className="radio-group">
                        {['Plain Text', 'Bold and Colored Text'].map(opt => (
                          <div key={opt} className={`radio-item ${settings.resultDisplay === opt ? 'selected' : ''}`} onClick={() => updateSetting('resultDisplay', opt)}>
                            <div className="radio-dot" />
                            {opt}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="setting-row">
                    <div className="setting-label">C(t) Value Digit</div>
                    <div className="setting-control">
                      <div className="radio-group">
                        {['One Decimal Digit', 'Two Decimal Digit'].map(opt => (
                          <div key={opt} className={`radio-item ${settings.ctValueDigit === opt ? 'selected' : ''}`} onClick={() => updateSetting('ctValueDigit', opt)}>
                            <div className="radio-dot" />
                            {opt}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="setting-row">
                    <div className="setting-label">Sample Index Setting</div>
                    <div className="setting-control">
                      <div className="radio-group">
                        {['enable', 'disable'].map(opt => (
                          <div key={opt} className={`radio-item ${settings.sampleIndexSetting === opt ? 'selected' : ''}`} onClick={() => updateSetting('sampleIndexSetting', opt)}>
                            <div className="radio-dot" />
                            {opt}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="setting-row">
                    <div className="setting-label">Display positive samples when IC is negative</div>
                    <div className="setting-control">
                      <div className={`toggle ${settings.displayPositiveWhenICNegative ? 'active' : ''}`} onClick={() => updateSetting('displayPositiveWhenICNegative', !settings.displayPositiveWhenICNegative)} />
                      <span className="toggle-label">{settings.displayPositiveWhenICNegative ? 'ON' : 'OFF'}</span>
                    </div>
                  </div>

                  <div className="setting-row">
                    <div className="setting-label">Invalidate all samples when either PC or NC is invalid</div>
                    <div className="setting-control">
                      <div className={`toggle ${settings.invalidateWhenPCNCInvalid ? 'active' : ''}`} onClick={() => updateSetting('invalidateWhenPCNCInvalid', !settings.invalidateWhenPCNCInvalid)} />
                      <span className="toggle-label">{settings.invalidateWhenPCNCInvalid ? 'ON' : 'OFF'}</span>
                    </div>
                  </div>
                </>
              )}

              {/* Display Setting - Target on/off 서브탭 */}
              {activeTab === 'display-target' && (
                <>
                  <div className="info-notice">
                    <div className="info-icon">🎯</div>
                    <div className="info-text">
                      <strong>Target 표시 설정</strong>
                      <p>Assay별로 표시할 Target을 선택합니다. OFF로 설정된 Target은 분석 결과 화면에 표시되지 않습니다.</p>
                    </div>
                  </div>

                  {/* Assay Pack 목록 */}
                  <div style={{ marginBottom: '20px' }}>
                    <div style={{ 
                      display: 'flex', 
                      justifyContent: 'space-between', 
                      alignItems: 'center',
                      marginBottom: '15px',
                      padding: '10px 15px',
                      background: '#f8f9fa',
                      borderRadius: '8px'
                    }}>
                      <h3 style={{ margin: 0, fontSize: '16px', fontWeight: '600' }}>Assay Pack 목록</h3>
                      <div className="search-box" style={{ width: '300px' }}>
                        <span>🔍</span>
                        <input 
                          type="text" 
                          placeholder="Assay 검색..." 
                          value={settings.assaySearch}
                          onChange={(e) => updateSetting('assaySearch', e.target.value)}
                          style={{ width: '100%' }}
                        />
                      </div>
                    </div>
                    
                    <div className="data-table">
                      <table>
                        <thead>
                          <tr>
                            <th style={{ width: '40%' }}>Assay Name</th>
                            <th style={{ width: '15%' }}>Intended Use</th>
                            <th style={{ width: '15%' }}>제조사</th>
                            <th style={{ width: '15%' }}>Version</th>
                            <th style={{ width: '15%' }}>Targets</th>
                          </tr>
                        </thead>
                        <tbody>
                          {settings.assayList
                            .filter(a => a.name.toLowerCase().includes(settings.assaySearch.toLowerCase()))
                            .map(assay => (
                            <tr 
                              key={assay.id}
                              className={settings.selectedAssay === assay.id ? 'selected' : ''}
                              onClick={() => {
                                updateSetting('selectedAssay', assay.id);
                              }}
                              style={{ cursor: 'pointer' }}
                            >
                              <td style={{ fontWeight: '500' }}>{assay.name}</td>
                              <td>
                                <span className="badge" style={{
                                  background: assay.intendedUse === 'IVD' ? '#dcfce7' : assay.intendedUse === 'RUO' ? '#e0e7ff' : '#fef3c7',
                                  color: assay.intendedUse === 'IVD' ? '#166534' : assay.intendedUse === 'RUO' ? '#3730a3' : '#92400e',
                                  padding: '4px 8px',
                                  borderRadius: '4px',
                                  fontSize: '12px',
                                  fontWeight: '500'
                                }}>
                                  {assay.intendedUse}
                                </span>
                              </td>
                              <td>{assay.manufacturer}</td>
                              <td style={{ fontFamily: 'monospace', color: '#6b7280' }}>{assay.version}</td>
                              <td style={{ textAlign: 'center' }}>
                                <span style={{
                                  background: '#dbeafe',
                                  color: '#1e40af',
                                  padding: '4px 10px',
                                  borderRadius: '12px',
                                  fontSize: '12px',
                                  fontWeight: '600'
                                }}>
                                  {assay.targets?.length || 0}
                                </span>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                      {settings.assayList.filter(a => a.name.toLowerCase().includes(settings.assaySearch.toLowerCase())).length === 0 && (
                        <div className="empty-state">
                          <div className="empty-icon">🔍</div>
                          <p>검색 결과가 없습니다.</p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Target 설정 영역 */}
                  <div style={{
                    border: '2px solid #3b82f6',
                    borderRadius: '8px',
                    padding: '20px',
                    background: '#f8fafc'
                  }}>
                    <div style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '15px'
                    }}>
                      <div>
                        <h3 style={{ margin: '0 0 5px 0', color: '#1e40af', fontSize: '16px' }}>
                          Target 설정
                        </h3>
                        {settings.selectedAssay && (
                          <span style={{ fontSize: '14px', color: '#6b7280' }}>
                            {settings.assayList.find(a => a.id === settings.selectedAssay)?.name}
                          </span>
                        )}
                      </div>
                      {settings.selectedAssay && (
                        <div style={{ display: 'flex', gap: '10px' }}>
                          <button 
                            className="btn btn-secondary"
                            style={{ fontSize: '13px', padding: '8px 16px' }}
                            onClick={() => {
                              const newList = settings.assayList.map(a => {
                                if (a.id === settings.selectedAssay) {
                                  return {
                                    ...a,
                                    targets: a.targets.map(t => ({ ...t, enabled: false }))
                                  };
                                }
                                return a;
                              });
                              updateSetting('assayList', newList);
                              setTargetOnOffChanged(true);
                            }}
                          >
                            전체 OFF
                          </button>
                          <button 
                            className="btn btn-primary"
                            style={{ fontSize: '13px', padding: '8px 16px' }}
                            onClick={() => {
                              const newList = settings.assayList.map(a => {
                                if (a.id === settings.selectedAssay) {
                                  return {
                                    ...a,
                                    targets: a.targets.map(t => ({ ...t, enabled: true }))
                                  };
                                }
                                return a;
                              });
                              updateSetting('assayList', newList);
                              setTargetOnOffChanged(true);
                            }}
                          >
                            전체 ON
                          </button>
                        </div>
                      )}
                    </div>

                    {settings.selectedAssay ? (
                      <div className="data-table">
                        <table>
                          <thead>
                            <tr>
                              <th style={{ width: '25%' }}>Channel</th>
                              <th style={{ width: '20%' }}>Dye</th>
                              <th style={{ width: '35%' }}>Target</th>
                              <th style={{ width: '20%', textAlign: 'center' }}>표시</th>
                            </tr>
                          </thead>
                          <tbody>
                            {settings.assayList
                              .find(a => a.id === settings.selectedAssay)
                              ?.targets.map(target => (
                              <tr key={target.id}>
                                <td>{target.channel}</td>
                                <td>
                                  <span className="badge dye" style={{
                                    background: '#e0e7ff',
                                    color: '#3730a3',
                                    padding: '4px 8px',
                                    borderRadius: '4px',
                                    fontSize: '12px',
                                    fontWeight: '500'
                                  }}>
                                    {target.dye}
                                  </span>
                                </td>
                                <td style={{ fontWeight: '500' }}>{target.target}</td>
                                <td style={{ textAlign: 'center' }}>
                                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                                    <div 
                                      className={`toggle ${target.enabled ? 'active' : ''}`}
                                      style={{ cursor: 'pointer' }}
                                      onClick={() => {
                                        const newList = settings.assayList.map(a => {
                                          if (a.id === settings.selectedAssay) {
                                            return {
                                              ...a,
                                              targets: a.targets.map(t =>
                                                t.id === target.id ? { ...t, enabled: !t.enabled } : t
                                              )
                                            };
                                          }
                                          return a;
                                        });
                                        updateSetting('assayList', newList);
                                        setTargetOnOffChanged(true);
                                      }}
                                    />
                                    <span style={{ 
                                      fontSize: '13px', 
                                      fontWeight: '600',
                                      color: target.enabled ? '#10b981' : '#6b7280'
                                    }}>
                                      {target.enabled ? 'ON' : 'OFF'}
                                    </span>
                                  </div>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    ) : (
                      <div className="empty-state">
                        <div className="empty-icon">☝️</div>
                        <p>위 Assay Pack 목록에서<br/>항목을 선택하세요</p>
                      </div>
                    )}
                  </div>
                </>
              )}

              {/* Display Setting - Developer Setting 서브탭 */}
              {activeTab === 'display-developer' && (
                <>
                  <div className="info-notice" style={{ background: '#fef3c7', borderColor: '#fbbf24', borderLeftColor: '#f59e0b' }}>
                    <div className="info-icon">⚠️</div>
                    <div className="info-text" style={{ color: '#92400e' }}>
                      <strong style={{ color: '#b45309' }}>Developer Setting</strong>
                      <p style={{ color: '#a16207' }}>개발자 전용 설정입니다. 일반 사용자는 변경하지 않는 것을 권장합니다.</p>
                    </div>
                  </div>

                  <div className="setting-row">
                    <div className="setting-label">
                      Display End RFU Value
                      <small>End RFU 값 표시</small>
                    </div>
                    <div className="setting-control">
                      <div className={`toggle`} />
                      <span className="toggle-label">OFF</span>
                    </div>
                  </div>

                  <div className="setting-row">
                    <div className="setting-label">
                      Display EPR Value
                      <small>EPR 값 표시</small>
                    </div>
                    <div className="setting-control">
                      <div className={`toggle`} />
                      <span className="toggle-label">OFF</span>
                    </div>
                  </div>

                  <div className="setting-row">
                    <div className="setting-label">
                      Display Graph of Negative Target
                      <small>음성 Target 그래프 표시</small>
                    </div>
                    <div className="setting-control">
                      <div className={`toggle`} />
                      <span className="toggle-label">OFF</span>
                    </div>
                  </div>

                  <div className="setting-row">
                    <div className="setting-label">
                      Display C(t) of Negative Target
                      <small>음성 Target의 C(t) 값 표시</small>
                    </div>
                    <div className="setting-control">
                      <div className={`toggle`} />
                      <span className="toggle-label">OFF</span>
                    </div>
                  </div>
                </>
              )}

              {/* Display Setting - Negative C(t) Value 서브탭 */}
              {activeTab === 'display-negative' && (
                <>
                  <div className="info-notice">
                    <div className="info-icon">📊</div>
                    <div className="info-text">
                      <strong>Negative C(t) Value 표시 설정</strong>
                      <p>Assay별로 Negative C(t) Value 표시 여부를 설정합니다. ON으로 설정된 Assay는 음성 결과에도 C(t) 값이 표시됩니다.</p>
                    </div>
                  </div>

                  <div style={{ padding: '16px 24px' }}>
                    <div className="assay-onoff-panel">
                      <div className="panel-header" style={{ justifyContent: 'space-between' }}>
                        <h3>Assay 목록</h3>
                        <div className="search-box">
                          <span>🔍</span>
                          <input 
                            type="text" 
                            placeholder="Assay 검색..." 
                            value={settings.assaySearch}
                            onChange={(e) => updateSetting('assaySearch', e.target.value)}
                          />
                        </div>
                      </div>
                      
                      <div className="assay-onoff-list">
                        <div className="assay-onoff-header">
                          <span className="th-assay-name">Assay Name</span>
                          <span className="th-intended-use">Intended Use</span>
                          <span className="th-assay-toggle">Negative C(t)</span>
                        </div>
                        
                        {settings.assayList
                          .filter(a => a.name.toLowerCase().includes(settings.assaySearch.toLowerCase()))
                          .map(assay => (
                          <div key={assay.id} className="assay-onoff-row">
                            <span className="td-assay-name">{assay.name}</span>
                            <span className="td-intended-use">
                              <span className="badge">{assay.intendedUse}</span>
                            </span>
                            <span className="td-assay-toggle">
                              <div className={`toggle`} style={{ transform: 'scale(0.85)' }} />
                              <span className="toggle-status">OFF</span>
                            </span>
                          </div>
                        ))}
                      </div>
                      
                      <div className="assay-onoff-footer">
                        <span style={{ fontSize: 12, color: '#64748b' }}>
                          총 {settings.assayList.filter(a => a.name.toLowerCase().includes(settings.assaySearch.toLowerCase())).length}개 Assay
                        </span>
                        <div style={{ display: 'flex', gap: 8 }}>
                          <button className="btn btn-secondary" style={{ fontSize: 12, padding: '6px 12px' }}>
                            전체 OFF
                          </button>
                          <button className="btn btn-primary" style={{ fontSize: 12, padding: '6px 12px' }}>
                            전체 ON
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}

              {/* Export Tab */}
              {activeTab === 'export' && (
                <>
                  <div className="subsection-title">LIS Export Setting</div>

                  <div className="setting-row">
                    <div className="setting-label">Auto Export</div>
                    <div className="setting-control">
                      <div className={`toggle ${settings.autoExport ? 'active' : ''}`} onClick={() => updateSetting('autoExport', !settings.autoExport)} />
                      <span className="toggle-label">{settings.autoExport ? 'ON' : 'OFF'}</span>
                    </div>
                  </div>

                  <div className="setting-row">
                    <div className="setting-label">Sample to Export</div>
                    <div className="setting-control">
                      <div className="radio-group">
                        {['All Samples', 'Selected Sample(s)'].map(opt => (
                          <div key={opt} className={`radio-item ${settings.sampleToExport === opt ? 'selected' : ''}`} onClick={() => updateSetting('sampleToExport', opt)}>
                            <div className="radio-dot" />
                            {opt}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="setting-row">
                    <div className="setting-label">Export Format</div>
                    <div className="setting-control">
                      <div className="radio-group">
                        {['xlsx', 'csv', 'xls'].map(opt => (
                          <div key={opt} className={`radio-item ${settings.exportFormat === opt ? 'selected' : ''}`} onClick={() => updateSetting('exportFormat', opt)}>
                            <div className="radio-dot" />
                            {opt}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* CSV Header Settings - CSV 선택 시 & 특정 언어 선택 시만 표시 */}
                  {settings.exportFormat === 'csv' && ['et', 'fr', 'de', 'it', 'lv', 'lt', 'pt', 'es', 'tr'].includes(settings.language) && (
                    <div className="setting-row" style={{ background: '#fef3c7' }}>
                      <div className="setting-label">
                        CSV Header Settings
                        <small>CSV 파일 헤더 형식</small>
                      </div>
                      <div className="setting-control">
                        <div className="radio-group">
                          {['default', 'new header'].map(opt => (
                            <div key={opt} className={`radio-item ${settings.csvHeaderSettings === opt ? 'selected' : ''}`} onClick={() => updateSetting('csvHeaderSettings', opt)}>
                              <div className="radio-dot" />
                              {opt}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="setting-row">
                    <div className="setting-label">Target Alignment Method</div>
                    <div className="setting-control">
                      <div className="radio-group">
                        {['세로', '가로'].map(opt => (
                          <div key={opt} className={`radio-item ${settings.targetAlignmentMethod === opt ? 'selected' : ''}`} onClick={() => updateSetting('targetAlignmentMethod', opt)}>
                            <div className="radio-dot" />
                            {opt}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="setting-row">
                    <div className="setting-label">Melt Temperature column</div>
                    <div className="setting-control">
                      <div className={`toggle ${settings.meltTemperatureColumn ? 'active' : ''}`} onClick={() => updateSetting('meltTemperatureColumn', !settings.meltTemperatureColumn)} />
                      <span className="toggle-label">{settings.meltTemperatureColumn ? 'ON' : 'OFF'}</span>
                    </div>
                  </div>

                  <div className="subsection-title">Auto Save Filename</div>

                  <div className="info-notice">
                    <div className="info-icon">ℹ️</div>
                    <div className="info-text">
                      <strong>Prefix 및 Folder Name 자동 입력 안내</strong>
                      <p>A, B, C, D 값은 plrn 파일에 포함되어 있습니다. plrn 파일로 분석파일을 열었을 때만 파일 접두어(Prefix)와 새 폴더 이름이 자동으로 입력됩니다.</p>
                    </div>
                  </div>

                  <div className="setting-row">
                    <div className="setting-label">
                      Use Raw Data Filename
                      <small>분석파일 이름으로 자동 저장</small>
                    </div>
                    <div className="setting-control">
                      <div className={`toggle ${settings.useRawDataFilename ? 'active' : ''}`} onClick={() => updateSetting('useRawDataFilename', !settings.useRawDataFilename)} />
                      <span className="toggle-label">{settings.useRawDataFilename ? 'ON' : 'OFF'}</span>
                    </div>
                  </div>

                  <div className="setting-row">
                    <div className="setting-label">
                      Use Prefix
                      <small>파일명 앞에 접두어 추가</small>
                    </div>
                    <div className="setting-control">
                      <div className={`toggle ${settings.usePrefix ? 'active' : ''}`} onClick={() => updateSetting('usePrefix', !settings.usePrefix)} />
                      <span className="toggle-label">{settings.usePrefix ? 'ON' : 'OFF'}</span>
                    </div>
                  </div>

                  {settings.usePrefix && (
                    <div className="setting-row" style={{ background: '#f0fdf4' }}>
                      <div className="setting-label">
                        Prefix Type
                        <small>사용할 접두어 선택</small>
                      </div>
                      <div className="setting-control">
                        <div className="radio-group">
                          {['A', 'B', 'C', 'D'].map(opt => (
                            <div key={opt} className={`radio-item ${settings.prefixType === opt ? 'selected' : ''}`} onClick={() => updateSetting('prefixType', opt)}>
                              <div className="radio-dot" />
                              {opt}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="setting-row">
                    <div className="setting-label">
                      Create New Folder
                      <small>새 폴더를 만들어서 저장</small>
                    </div>
                    <div className="setting-control">
                      <div className={`toggle ${settings.createNewFolder ? 'active' : ''}`} onClick={() => updateSetting('createNewFolder', !settings.createNewFolder)} />
                      <span className="toggle-label">{settings.createNewFolder ? 'ON' : 'OFF'}</span>
                    </div>
                  </div>

                  {settings.createNewFolder && (
                    <div className="setting-row" style={{ background: '#fef3c7' }}>
                      <div className="setting-label">
                        Folder Name
                        <small>생성할 폴더명 선택</small>
                      </div>
                      <div className="setting-control">
                        <div className="radio-group">
                          {['A', 'B', 'C', 'D'].map(opt => (
                            <div key={opt} className={`radio-item ${settings.folderNameType === opt ? 'selected' : ''}`} onClick={() => updateSetting('folderNameType', opt)}>
                              <div className="radio-dot" />
                              {opt}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Preview */}
                  <div className="preview-section">
                    <div className="preview-title">📁 저장 경로 미리보기</div>
                    <div className="preview-path">
                      <span className="path-segment path-base">C:\Seegene\Export</span>
                      {settings.createNewFolder && (
                        <><span className="path-separator">\</span><span className="path-segment path-folder">[{settings.folderNameType}]</span></>
                      )}
                      <span className="path-separator">\</span>
                      {settings.usePrefix && (
                        <span className="path-segment path-prefix">[{settings.prefixType}]_</span>
                      )}
                      <span className="path-segment path-filename">
                        {settings.useRawDataFilename ? 'RawDataFilename' : 'filename'}
                      </span>
                      <span className="path-segment path-ext">.{settings.exportFormat}</span>
                    </div>
                    <div className="preview-example">
                      <span className="preview-example-label">예시:</span>
                      <code>C:\Seegene\Export{settings.createNewFolder ? `\\${settings.folderNameType === 'A' ? '20241223' : settings.folderNameType === 'B' ? 'PlateID_001' : settings.folderNameType === 'C' ? 'OrderNo_001' : 'CustomFolder'}` : ''}\{settings.usePrefix ? `${settings.prefixType === 'A' ? '20241223' : settings.prefixType === 'B' ? 'PlateID' : settings.prefixType === 'C' ? 'OrderNo' : 'Custom'}_` : ''}{settings.useRawDataFilename ? 'PCR_RawData_001' : 'result'}.{settings.exportFormat}</code>
                    </div>
                  </div>
                </>
              )}

              {/* Export - HL7 Transfer Setting 서브탭 */}
              {activeTab === 'export-hl7-transfer' && (
                <>
                  <div className="setting-row">
                    <div className="setting-label">HL7 Version</div>
                    <div className="setting-control">
                      <div className="radio-group">
                        {['2.3.1', '2.5.1'].map(opt => (
                          <div key={opt} className={`radio-item ${settings.hl7Version === opt ? 'selected' : ''}`} onClick={() => updateSetting('hl7Version', opt)}>
                            <div className="radio-dot" />
                            {opt}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="setting-row">
                    <div className="setting-label">Transfer Items</div>
                    <div className="setting-control">
                      <div className="checkbox-group">
                        {[
                          { key: 'result', label: 'Result' },
                          { key: 'ctValue', label: 'C(t) Value' },
                          { key: 'meltTemp', label: 'Melt Temperature' }
                        ].map(item => (
                          <div key={item.key} className={`checkbox-item ${settings.hl7TransferItems?.[item.key] ? 'checked' : ''}`} onClick={() => {
                            const current = settings.hl7TransferItems || { result: true, ctValue: true, meltTemp: false };
                            updateSetting('hl7TransferItems', { ...current, [item.key]: !current[item.key] });
                          }}>
                            <div className="checkbox-box">
                              <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                                <path d="M1 5L4.5 8.5L11 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </div>
                            {item.label}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="setting-row">
                    <div className="setting-label">SD invalid</div>
                    <div className="setting-control">
                      <div className={`toggle ${settings.hl7SdInvalid ? 'active' : ''}`} onClick={() => updateSetting('hl7SdInvalid', !settings.hl7SdInvalid)} />
                      <span className="toggle-label">{settings.hl7SdInvalid ? 'ON' : 'OFF'}</span>
                    </div>
                  </div>

                  <div className="setting-row">
                    <div className="setting-label">Sample to Export</div>
                    <div className="setting-control">
                      <div className="radio-group">
                        {['All Samples', 'Selected Sample(s)'].map(opt => (
                          <div key={opt} className={`radio-item ${settings.hl7SampleToExport === opt ? 'selected' : ''}`} onClick={() => updateSetting('hl7SampleToExport', opt)}>
                            <div className="radio-dot" />
                            {opt}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="setting-row">
                    <div className="setting-label">
                      Transfer Protocol
                      <small>MLLP 선택 시 IP와 PORT 입력 필요</small>
                    </div>
                    <div className="setting-control">
                      <div className="radio-group">
                        {['HTTP', 'MLLP'].map(opt => (
                          <div key={opt} className={`radio-item ${settings.hl7TransferProtocol === opt ? 'selected' : ''}`} onClick={() => updateSetting('hl7TransferProtocol', opt)}>
                            <div className="radio-dot" />
                            {opt}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {settings.hl7TransferProtocol === 'MLLP' && (
                    <>
                      <div className="setting-row" style={{ background: '#eff6ff' }}>
                        <div className="setting-label">
                          Server IP
                          <small>MLLP 서버 IP 주소</small>
                        </div>
                        <div className="setting-control">
                          <input type="text" className="text-input" placeholder="192.168.0.1" value={settings.hl7ServerIP} onChange={(e) => updateSetting('hl7ServerIP', e.target.value)} style={{ width: 180 }} />
                        </div>
                      </div>
                      <div className="setting-row" style={{ background: '#eff6ff' }}>
                        <div className="setting-label">
                          Server Port
                          <small>MLLP 서버 포트</small>
                        </div>
                        <div className="setting-control">
                          <input type="text" className="text-input" placeholder="5000" value={settings.hl7ServerPort} onChange={(e) => updateSetting('hl7ServerPort', e.target.value)} style={{ width: 120 }} />
                        </div>
                      </div>
                    </>
                  )}

                  <div className="setting-row">
                    <div className="setting-label">Transfer Method</div>
                    <div className="setting-control">
                      <div className="radio-group" style={{ flexDirection: 'column', alignItems: 'flex-start', gap: '8px' }}>
                        {[
                          { value: 'all-at-once', label: 'Connected and transfer all samples at once' },
                          { value: 'per-sample', label: 'Per sample' }
                        ].map(opt => (
                          <div key={opt.value} className={`radio-item ${settings.hl7TransferMethod === opt.value ? 'selected' : ''}`} onClick={() => updateSetting('hl7TransferMethod', opt.value)}>
                            <div className="radio-dot" />
                            {opt.label}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="setting-row">
                    <div className="setting-label">
                      Response Timeout (ms)
                      <small>응답 대기 시간</small>
                    </div>
                    <div className="setting-control">
                      <input type="number" className="text-input" placeholder="30000" value={settings.hl7ResponseTimeout} onChange={(e) => updateSetting('hl7ResponseTimeout', e.target.value)} style={{ width: 120 }} />
                      <span style={{ fontSize: 12, color: '#64748b', marginLeft: 8 }}>ms</span>
                    </div>
                  </div>
                </>
              )}

              {/* Export - HL7 Abbreviation Setting 서브탭 */}
              {activeTab === 'export-hl7-abbrev' && (
                <>
                  <div className="info-notice">
                    <div className="info-icon">💡</div>
                    <div className="info-text">
                      <strong>HL7 Abbreviation 설정</strong>
                      <p>Assay 및 Target의 HL7 메시지 전송 시 사용할 코드를 설정합니다.</p>
                    </div>
                  </div>

                  <div className="hl7-abbrev-vertical">
                    {/* Assay 테이블 */}
                    <div className="hl7-section">
                      <div className="section-header">
                        <h3>Assay 목록</h3>
                        <div className="search-box" style={{ width: '200px' }}>
                          <span>🔍</span>
                          <input 
                            type="text" 
                            placeholder="Assay 검색..." 
                            value={settings.hl7AbbrevAssaySearch || ''}
                            onChange={(e) => updateSetting('hl7AbbrevAssaySearch', e.target.value)}
                          />
                        </div>
                      </div>
                      <div className="data-table">
                        <table>
                          <thead>
                            <tr>
                              <th style={{ width: '40%' }}>ASSAY NAME</th>
                              <th style={{ width: '20%' }}>INTENDED USE</th>
                              <th style={{ width: '20%' }}>ASSAY CODE</th>
                              <th style={{ width: '20%' }}></th>
                            </tr>
                          </thead>
                          <tbody>
                            {settings.assayList
                              .filter(a => a.name.toLowerCase().includes((settings.hl7AbbrevAssaySearch || '').toLowerCase()))
                              .map(assay => (
                              <tr 
                                key={assay.id}
                                className={settings.hl7AbbrevSelectedAssay === assay.id ? 'selected' : ''}
                                onClick={() => updateSetting('hl7AbbrevSelectedAssay', assay.id)}
                                style={{ cursor: 'pointer' }}
                              >
                                <td>{assay.name}</td>
                                <td><span className="badge">{assay.intendedUse}</span></td>
                                <td>
                                  <input 
                                    type="text"
                                    className="inline-input"
                                    value={assay.assayCode}
                                    onClick={(e) => e.stopPropagation()}
                                    onChange={(e) => {
                                      const newList = settings.assayList.map(a => 
                                        a.id === assay.id ? {...a, assayCode: e.target.value} : a
                                      );
                                      updateSetting('assayList', newList);
                                    }}
                                    style={{ width: '80px' }}
                                  />
                                </td>
                                <td style={{ textAlign: 'center' }}>
                                  <span style={{ color: settings.hl7AbbrevSelectedAssay === assay.id ? '#2563eb' : '#94a3b8', fontSize: '12px' }}>
                                    {settings.hl7AbbrevSelectedAssay === assay.id ? '▼ 선택됨' : '클릭하여 선택'}
                                  </span>
                                </td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    </div>

                    {/* Target 테이블 */}
                    <div className="hl7-section">
                      <div className="section-header">
                        <h3>Target Code 설정</h3>
                        {settings.hl7AbbrevSelectedAssay && (
                          <span className="panel-subtitle" style={{ marginLeft: '12px', color: '#2563eb', fontWeight: 500 }}>
                            {settings.assayList.find(a => a.id === settings.hl7AbbrevSelectedAssay)?.name}
                          </span>
                        )}
                      </div>
                      
                      {settings.hl7AbbrevSelectedAssay ? (
                        <div className="data-table">
                          <table>
                            <thead>
                              <tr>
                                <th style={{ width: '25%' }}>CHANNEL</th>
                                <th style={{ width: '20%' }}>DYE</th>
                                <th style={{ width: '30%' }}>TARGET</th>
                                <th style={{ width: '25%' }}>TARGET CODE</th>
                              </tr>
                            </thead>
                            <tbody>
                              {settings.assayList
                                .find(a => a.id === settings.hl7AbbrevSelectedAssay)
                                ?.targets.map(target => (
                                <tr key={target.id}>
                                  <td>{target.channel}</td>
                                  <td><span className="badge dye">{target.dye}</span></td>
                                  <td>{target.target}</td>
                                  <td>
                                    <input 
                                      type="text"
                                      className="inline-input"
                                      value={target.targetCode}
                                      onChange={(e) => {
                                        const newList = settings.assayList.map(a => {
                                          if (a.id === settings.hl7AbbrevSelectedAssay) {
                                            return {
                                              ...a,
                                              targets: a.targets.map(t =>
                                                t.id === target.id ? {...t, targetCode: e.target.value} : t
                                              )
                                            };
                                          }
                                          return a;
                                        });
                                        updateSetting('assayList', newList);
                                      }}
                                      style={{ width: '80px' }}
                                    />
                                  </td>
                                </tr>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      ) : (
                        <div className="empty-state-inline">
                          <span className="empty-icon">☝️</span>
                          <span>위 Assay 목록에서 항목을 선택하세요</span>
                        </div>
                      )}
                    </div>
                  </div>
                </>
              )}

              {/* Print Tab */}
              {activeTab === 'print' && (
                <>
                  <div className="setting-row">
                    <div className="setting-label">Print Range</div>
                    <div className="setting-control">
                      <div className="radio-group">
                        {['All Samples', 'Selected Sample(s)'].map(opt => (
                          <div key={opt} className={`radio-item ${settings.printRange === opt ? 'selected' : ''}`} onClick={() => updateSetting('printRange', opt)}>
                            <div className="radio-dot" />
                            {opt}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="setting-row">
                    <div className="setting-label">Print Items</div>
                    <div className="setting-control">
                      <div className="checkbox-group">
                        {[{ key: 'number', label: 'Number' }, { key: 'sampleId', label: 'Sample ID' }].map(item => (
                          <div key={item.key} className={`checkbox-item ${settings.printItems[item.key] ? 'checked' : ''}`} onClick={() => updateCheckbox('printItems', item.key)}>
                            <div className="checkbox-box">
                              <svg width="12" height="10" viewBox="0 0 12 10" fill="none">
                                <path d="M1 5L4.5 8.5L11 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                              </svg>
                            </div>
                            {item.label}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="subsection-title">Logo Setting</div>

                  <div className="setting-row">
                    <div className="setting-label">로고 불러오기</div>
                    <div className="setting-control">
                      <div className="folder-path-control">
                        <input type="text" className="text-input path-input" placeholder="로고 파일을 선택하세요" value={settings.logoFile} readOnly />
                        <button className="file-btn">📂 파일 열기</button>
                      </div>
                    </div>
                  </div>

                  <div className="setting-row">
                    <div className="setting-label">Add Logo to Print</div>
                    <div className="setting-control">
                      <div className={`toggle ${settings.addLogoToPrint ? 'active' : ''}`} onClick={() => updateSetting('addLogoToPrint', !settings.addLogoToPrint)} />
                      <span className="toggle-label">{settings.addLogoToPrint ? 'ON' : 'OFF'}</span>
                    </div>
                  </div>

                  {settings.addLogoToPrint && (
                    <div className="setting-row" style={{ background: '#f0fdf4' }}>
                      <div className="setting-label">Logo Print Location</div>
                      <div className="setting-control">
                        <div className="radio-group">
                          {['Top Left', 'Top Center', 'Top Right'].map(opt => (
                            <div key={opt} className={`radio-item ${settings.logoPrintLocation === opt ? 'selected' : ''}`} onClick={() => updateSetting('logoPrintLocation', opt)}>
                              <div className="radio-dot" />
                              {opt}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  <div className="subsection-title">Watermark Setting</div>

                  <div className="setting-row">
                    <div className="setting-label">워터마크 불러오기</div>
                    <div className="setting-control">
                      <div className="folder-path-control">
                        <input type="text" className="text-input path-input" placeholder="워터마크 파일을 선택하세요" value={settings.watermarkFile} readOnly />
                        <button className="file-btn">📂 파일 열기</button>
                      </div>
                    </div>
                  </div>

                  <div className="setting-row">
                    <div className="setting-label">Add Watermark to Print</div>
                    <div className="setting-control">
                      <div className={`toggle ${settings.addWatermarkToPrint ? 'active' : ''}`} onClick={() => updateSetting('addWatermarkToPrint', !settings.addWatermarkToPrint)} />
                      <span className="toggle-label">{settings.addWatermarkToPrint ? 'ON' : 'OFF'}</span>
                    </div>
                  </div>

                  {settings.addWatermarkToPrint && (
                    <div className="setting-row" style={{ background: '#fef3c7' }}>
                      <div className="setting-label">
                        Watermark Layout
                        <small>워터마크 반복 배치</small>
                      </div>
                      <div className="setting-control">
                        <div className="radio-group">
                          {['1x1', '2x2', '3x3', '4x3', '3x4', '4x4', '5x5'].map(opt => (
                            <div key={opt} className={`radio-item ${settings.watermarkLayout === opt ? 'selected' : ''}`} onClick={() => updateSetting('watermarkLayout', opt)}>
                              <div className="radio-dot" />
                              {opt}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </>
              )}

              {/* Assay Pack Tab */}
              {activeTab === 'assay' && (
                <>
                  <div className="assay-header" style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '20px',
                    padding: '15px 20px',
                    background: '#f8f9fa',
                    borderRadius: '8px'
                  }}>
                    <div style={{ display: 'flex', gap: '10px', alignItems: 'center', flex: 1 }}>
                      <span style={{ fontSize: '18px' }}>🔍</span>
                      <input 
                        type="text" 
                        placeholder="Assay Pack 검색 (이름, 제조사, 버전)..." 
                        value={settings.assaySearch}
                        onChange={(e) => updateSetting('assaySearch', e.target.value)}
                        style={{
                          flex: 1,
                          padding: '10px 15px',
                          border: '1px solid #ddd',
                          borderRadius: '6px',
                          fontSize: '14px'
                        }}
                      />
                    </div>
                    <button 
                      className="btn btn-primary"
                      onClick={() => updateSetting('showAddAssayModal', true)}
                      style={{
                        marginLeft: '15px',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '5px',
                        whiteSpace: 'nowrap'
                      }}
                    >
                      <span style={{ fontSize: '16px' }}>➕</span>
                      Assay Pack 추가
                    </button>
                  </div>

                  <div className="data-table" style={{ marginBottom: '30px' }}>
                    <table>
                      <thead>
                        <tr>
                          <th style={{ width: '30%' }}>Assay Name</th>
                          <th style={{ width: '15%' }}>Intended Use</th>
                          <th style={{ width: '12%' }}>Version</th>
                          <th style={{ width: '18%' }}>제조사</th>
                          <th style={{ width: '15%' }}>Install Date</th>
                          <th style={{ width: '10%' }}>삭제</th>
                        </tr>
                      </thead>
                      <tbody>
                        {settings.assayList
                          .filter(a => {
                            const search = settings.assaySearch.toLowerCase();
                            return a.name.toLowerCase().includes(search) ||
                                   a.manufacturer.toLowerCase().includes(search) ||
                                   a.version.toLowerCase().includes(search);
                          })
                          .map(assay => (
                          <tr 
                            key={assay.id} 
                            className={settings.selectedAssay === assay.id ? 'selected' : ''}
                            onClick={() => updateSetting('selectedAssay', assay.id)}
                            style={{ cursor: 'pointer' }}
                          >
                            <td style={{ fontWeight: '500' }}>{assay.name}</td>
                            <td>
                              <span className="badge" style={{
                                background: assay.intendedUse === 'IVD' ? '#dcfce7' : assay.intendedUse === 'RUO' ? '#e0e7ff' : '#fef3c7',
                                color: assay.intendedUse === 'IVD' ? '#166534' : assay.intendedUse === 'RUO' ? '#3730a3' : '#92400e',
                                padding: '4px 8px',
                                borderRadius: '4px',
                                fontSize: '12px',
                                fontWeight: '500'
                              }}>
                                {assay.intendedUse}
                              </span>
                            </td>
                            <td style={{ fontFamily: 'monospace' }}>{assay.version}</td>
                            <td>{assay.manufacturer}</td>
                            <td style={{ color: '#6b7280' }}>{assay.installDate}</td>
                            <td style={{ textAlign: 'center' }}>
                              <button
                                onClick={(e) => {
                                  e.stopPropagation();
                                  handleDeleteAssay(assay.id);
                                }}
                                style={{
                                  background: '#fee2e2',
                                  color: '#dc2626',
                                  border: 'none',
                                  padding: '6px 12px',
                                  borderRadius: '6px',
                                  cursor: 'pointer',
                                  fontSize: '12px',
                                  fontWeight: '500',
                                  transition: 'all 0.2s'
                                }}
                                onMouseEnter={(e) => {
                                  e.target.style.background = '#fecaca';
                                }}
                                onMouseLeave={(e) => {
                                  e.target.style.background = '#fee2e2';
                                }}
                              >
                                🗑️ 삭제
                              </button>
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                    {settings.assayList.filter(a => {
                      const search = settings.assaySearch.toLowerCase();
                      return a.name.toLowerCase().includes(search) ||
                             a.manufacturer.toLowerCase().includes(search) ||
                             a.version.toLowerCase().includes(search);
                    }).length === 0 && (
                      <div className="empty-state" style={{
                        padding: '40px',
                        textAlign: 'center',
                        color: '#9ca3af'
                      }}>
                        <div style={{ fontSize: '48px', marginBottom: '10px' }}>🔍</div>
                        <p>검색 결과가 없습니다.</p>
                      </div>
                    )}
                  </div>
                </>
              )}
            </div>

            {/* Tab Footer with Save */}
            <div className="tab-content-footer">
              <div className="footer-status">
                {hasUnsavedChanges && (
                  <span className="status-unsaved">● 저장되지 않은 변경사항</span>
                )}
                {showSaveSuccess && (
                  <span className="status-success">✓ 설정 변경이 완료되었습니다</span>
                )}
              </div>
              <div className="footer-buttons">
                <button className="btn btn-primary" onClick={handleSave} disabled={!hasUnsavedChanges}>
                  저장
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Unsaved Changes Alert */}
        {showUnsavedAlert && (
          <div className="alert-overlay">
            <div className="alert-modal">
              <h3>⚠️ 저장되지 않은 변경사항</h3>
              <p>현재 탭에 저장되지 않은 변경사항이 있습니다.<br/>저장하지 않고 이동하면 변경 내용이 사라집니다.</p>
              <div className="alert-buttons">
                <button className="btn btn-secondary" onClick={() => setShowUnsavedAlert(false)}>취소</button>
                <button className="btn btn-danger" onClick={handleDiscardChanges}>저장 안 함</button>
                <button className="btn btn-primary" onClick={handleSaveAndSwitch}>저장 후 이동</button>
              </div>
            </div>
          </div>
        )}

        {/* Analysis Tab Close Warning */}
        {showAnalysisTabWarning && (
          <div className="alert-overlay">
            <div className="alert-modal">
              <h3>🔔 분석 탭 닫힘 안내</h3>
              <p>변경된 설정을 적용하면 현재 열려있는<br/><strong>모든 분석 탭이 닫힙니다.</strong></p>
              <div className="changed-settings-list">
                <div className="changed-settings-title">변경된 설정 항목:</div>
                <ul>
                  {settings.pcrRawDataType !== initialCriticalSettings.current.pcrRawDataType && (
                    <li>PCR Raw Data Type (PCR 장비 SW설정)</li>
                  )}
                  {settings.sampleId !== initialCriticalSettings.current.sampleId && (
                    <li>Sample ID</li>
                  )}
                  {settings.resultView !== initialCriticalSettings.current.resultView && (
                    <li>Result View</li>
                  )}
                  {settings.ctValueDigit !== initialCriticalSettings.current.ctValueDigit && (
                    <li>C(t) Value Digit</li>
                  )}
                  {settings.sampleIndexSetting !== initialCriticalSettings.current.sampleIndexSetting && (
                    <li>Sample Index Setting</li>
                  )}
                  {targetOnOffChanged && (
                    <li>Target on/off</li>
                  )}
                </ul>
              </div>
              <div className="alert-buttons">
                <button className="btn btn-secondary" onClick={handleCancelAnalysisTabClose}>취소</button>
                <button className="btn btn-primary" onClick={handleConfirmAnalysisTabClose}>확인 후 저장</button>
              </div>
            </div>
          </div>
        )}

        {/* Add Assay Pack Modal */}
        {settings.showAddAssayModal && (
          <div className="alert-overlay">
            <div className="alert-modal" style={{ maxWidth: '500px' }}>
              <h3 style={{ marginBottom: '20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span>🧬</span> Assay Pack 추가
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                <div>
                  <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500', fontSize: '14px' }}>
                    Assay Name <span style={{ color: '#ef4444' }}>*</span>
                  </label>
                  <input 
                    type="text"
                    placeholder="예: Allplex SARS-CoV-2"
                    value={settings.newAssay.name}
                    onChange={(e) => updateNewAssay('name', e.target.value)}
                    style={{
                      width: '100%',
                      padding: '10px',
                      border: '1px solid #d1d5db',
                      borderRadius: '6px',
                      fontSize: '14px'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500', fontSize: '14px' }}>
                    Intended Use <span style={{ color: '#ef4444' }}>*</span>
                  </label>
                  <div style={{ display: 'flex', gap: '10px' }}>
                    {['IVD', 'RUO', 'LDT'].map(opt => (
                      <div 
                        key={opt}
                        className={`radio-item ${settings.newAssay.intendedUse === opt ? 'selected' : ''}`}
                        onClick={() => updateNewAssay('intendedUse', opt)}
                        style={{ flex: 1, textAlign: 'center' }}
                      >
                        <div className="radio-dot" />
                        {opt}
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '15px' }}>
                  <div style={{ flex: 1 }}>
                    <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500', fontSize: '14px' }}>
                      Version <span style={{ color: '#ef4444' }}>*</span>
                    </label>
                    <input 
                      type="text"
                      placeholder="예: 1.0.0"
                      value={settings.newAssay.version}
                      onChange={(e) => updateNewAssay('version', e.target.value)}
                      style={{
                        width: '100%',
                        padding: '10px',
                        border: '1px solid #d1d5db',
                        borderRadius: '6px',
                        fontSize: '14px'
                      }}
                    />
                  </div>

                  <div style={{ flex: 1 }}>
                    <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500', fontSize: '14px' }}>
                      Install Date <span style={{ color: '#ef4444' }}>*</span>
                    </label>
                    <input 
                      type="date"
                      value={settings.newAssay.installDate}
                      onChange={(e) => updateNewAssay('installDate', e.target.value)}
                      style={{
                        width: '100%',
                        padding: '10px',
                        border: '1px solid #d1d5db',
                        borderRadius: '6px',
                        fontSize: '14px'
                      }}
                    />
                  </div>
                </div>

                <div>
                  <label style={{ display: 'block', marginBottom: '5px', fontWeight: '500', fontSize: '14px' }}>
                    제조사 <span style={{ color: '#ef4444' }}>*</span>
                  </label>
                  <input 
                    type="text"
                    placeholder="예: Seegene"
                    value={settings.newAssay.manufacturer}
                    onChange={(e) => updateNewAssay('manufacturer', e.target.value)}
                    style={{
                      width: '100%',
                      padding: '10px',
                      border: '1px solid #d1d5db',
                      borderRadius: '6px',
                      fontSize: '14px'
                    }}
                  />
                </div>
              </div>

              <div className="alert-buttons" style={{ marginTop: '25px' }}>
                <button 
                  className="btn btn-secondary" 
                  onClick={() => updateSetting('showAddAssayModal', false)}
                >
                  취소
                </button>
                <button 
                  className="btn btn-primary" 
                  onClick={handleAddAssay}
                >
                  추가
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
