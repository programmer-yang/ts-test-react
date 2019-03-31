import * as React from "react";
import { IntlProvider, addLocaleData } from "react-intl";
import * as intlEnData from "react-intl/locale-data/en";
import * as intlZhData from "react-intl/locale-data/zh";

import localZhData from "../../locale/zh_CN";
import localEnData from "../../locale/en_US";

import "./index.css";

addLocaleData([...intlEnData, ...intlZhData]);

class Layout extends React.Component {
  state = {
    locale: "zh"
  };
  localChangeLocale = (e: React.ChangeEvent<HTMLSelectElement>) => {
    this.setState({
      locale: e.target.value
    });
  };
  render() {
    const { children } = this.props;
    const { locale } = this.state;

    const localeData: any = {
      zh: {
        localData: localZhData
      },
      en: {
        localData: localEnData
      }
    };

    return (
      <IntlProvider locale={locale} messages={localeData[locale].localData}>
        <div className="layout">
          <header className="layout-header">
            <select value={locale} onChange={this.localChangeLocale}>
              <option value="zh">中文</option>
              <option value="en">英文</option>
            </select>
          </header>
          <div className="layout-content">{children}</div>
        </div>
      </IntlProvider>
    );
  }
}

export default Layout;
