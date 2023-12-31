import React from 'react';
import "../scss/footer.scss"
const Footer = () => {
  return (
    <footer>
			<div className='footer-bottom'>
      <p className='footer-bottom-text'>RISK WARNING Fairmarkets International Ltd., which is subject to ownership and control of Trive Investment B.V. , 
				holds an Investment Dealer (Full Service Dealer, excluding Underwriting) Licence with licence number GB21026295 pursuant to section 29 of the Securities Act 2005, Rule 4 of the Securities Rules 2007, and the Financial Services Rules 2008. Fairmarkets International Ltd. is authorized and regulated by the Mauritius Financial Services Commission (FSC) and holds Global Business Licence number GB21026295 under Section 72(6) of the Financial Services Act.
				 FairMarkets is a trademark of Fairmarkets International Ltd.</p>
			<p className='footer-bottom-text'>No services are offered to stateless persons, persons under the age of 18 years, persons and/or residents of sanctioned
				 countries or any other jurisdiction where the distribution of leveraged instruments is prohibited, and citizens of any state
				  or country where it may be against the law of that country to trade with a Mauritius and/or Australia based company and/or where the services are not made available by the Fairmarkets International Ltd. and/or Fairmarkets Trading Pty Ltd to hold an account with us. In any case, above all, 
				it is your responsibility to avoid contravening any legislation in the country from where you are at the time.</p>
				<p className='footer-bottom-text'>
				RISK DISCLOSURE CFDs are complex instruments and come with a high risk of losing money rapidly due to leverage. 
				You should consider whether you understand how CFDs work and whether you can afford to take the high 
				risk of losing your money. See our full Risk Disclosure and Terms of Business for further details.
				</p>
			</div>

    </footer>
  );
};

export default Footer;
