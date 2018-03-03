import React from 'react';
import {Text, View,StyleSheet,TouchableHighlight,
  Image,
  Dimensions,TouchableOpacity,
  StatusBar,ScrollView} from 'react-native';


import { Actions,PARAMS } from 'react-native-router-flux';
import LinearGradient from 'react-native-linear-gradient';

const { width, height } = Dimensions.get('window')
export default class TermsScreen extends React.Component {

	// customizing navigation page options :title
	
	// Rendered screen elements
	render(){
		const {container,viewStyle,firstParagraph,back,title}= styles;
		return(
			<View style={container}>
				<View style={viewStyle}>
					<View style={{flexDirection:'row',}}>
						<TouchableOpacity
		            
				            style={back}

				            onPress={() => Actions.pop()}
				         > 
				            <Image
				               source={require('../assets/images/Back-arrow.png')}
				            >
				            </Image>
		          		</TouchableOpacity>
		          		<Text style={title}>El-Mawkaa Terms & Conditions</Text>

		          		
					</View>

				</View>
				<ScrollView>
				<Text style={firstParagraph}>
				
This End-User License Agreement ("EULA") is a legal agreement between you and ElMawkaa LLC
</Text>
<Text style={firstParagraph}>
This EULA agreement governs your acquisition and use of our ElMawkaa software ("Software") directly from ElMawkaa LLC or indirectly through a ElMawkaa LLC authorized reseller or distributor (a "Reseller").
</Text>
<Text style={firstParagraph}>
Please read this EULA agreement carefully before completing the installation process and using the ElMawkaa software. It provides a license to use the ElMawkaa software and contains warranty information and liability disclaimers.
</Text>
<Text style={firstParagraph}>
If you register for a free trial of the ElMawkaa software, this EULA agreement will also govern that trial. By clicking "accept" or installing and/or using the ElMawkaa software, you are confirming your acceptance of the Software and agreeing to become bound by the terms of this EULA agreement.
</Text>
<Text style={firstParagraph}>
If you are entering into this EULA agreement on behalf of a company or other legal entity, you represent that you have the authority to bind such entity and its affiliates to these terms and conditions. If you do not have such authority or if you do not agree with the terms and conditions of this EULA agreement, do not install or use the Software, and you must not accept this EULA agreement.
</Text>
<Text style={firstParagraph}>
This EULA agreement shall apply only to the Software supplied by ElMawkaa LLC herewith regardless of whether other software is referred to or described herein. The terms also apply to any ElMawkaa LLC updates, supplements, Internet-based services, and support services for the Software, unless other terms accompany those items on delivery. If so, those terms apply.
</Text>
<Text style={firstParagraph}>
License Grant
</Text>
<Text style={firstParagraph}>
ElMawkaa LLC hereby grants you a personal, non-transferable, non-exclusive licence to use the ElMawkaa software on your devices in accordance with the terms of this EULA agreement.
</Text>
<Text style={firstParagraph}>
You are permitted to load the ElMawkaa software (for example a PC, laptop, mobile or tablet) under your control. You are responsible for ensuring your device meets the minimum requirements of the ElMawkaa software.
</Text>
<Text style={firstParagraph}>
You are not permitted to:

</Text>
<Text style={firstParagraph}>
- Edit, alter, modify, adapt, translate or otherwise change the whole or any part of the Software nor permit the whole or any part of the Software to be combined with or become incorporated in any other software, nor decompile, disassemble or reverse engineer the Software or attempt to do any such things
</Text>
<Text style={firstParagraph}>
- Reproduce, copy, distribute, resell or otherwise use the Software for any commercial purpose
</Text>
<Text style={firstParagraph}>
- Allow any third party to use the Software on behalf of or for the benefit of any third party
</Text>
<Text style={firstParagraph}>

- Use the Software in any way which breaches any applicable local, national or international law
</Text>
<Text style={firstParagraph}>
- use the Software for any purpose that ElMawkaa LLC considers is a breach of this EULA agreement
</Text>
<Text style={firstParagraph}>

Intellectual Property and Ownership
</Text>
<Text style={firstParagraph}>
ElMawkaa LLC shall at all times retain ownership of the Software as originally downloaded by you and all subsequent downloads of the Software by you. The Software (and the copyright, and other intellectual property rights of whatever nature in the Software, including any modifications made thereto) are and shall remain the property of ElMawkaa LLC.
</Text>
<Text style={firstParagraph}>
ElMawkaa LLC reserves the right to grant licences to use the Software to third parties.
</Text>
<Text style={firstParagraph}>
Termination
</Text>
<Text style={firstParagraph}>
This EULA agreement is effective from the date you first use the Software and shall continue until terminated. You may terminate it at any time upon written notice to ElMawkaa LLC.
</Text>
<Text style={firstParagraph}>
This EULA was created by eulatemplate.com for ElMawkaa
</Text>
<Text style={firstParagraph}>
It will also terminate immediately if you fail to comply with any term of this EULA agreement. Upon such termination, the licenses granted by this EULA agreement will immediately terminate and you agree to stop all access and use of the Software. The provisions that by their nature continue and survive will survive any termination of this EULA agreement.
</Text>
<Text style={firstParagraph}>
Disputes
</Text>
<Text style={firstParagraph}>
You will resolve any claim, cause of action or dispute (claim) you have with us arising out of or relating to this Statement or ElMawkaa exclusively in the U.S. District Court for the Northern District of California or a state court located in San Mateo County, and you agree to submit to the personal jurisdiction of such courts for the purpose of litigating all such claims. The laws of the State of California will govern this Statement, as well as any claim that might arise between you and us, without regard to conflict of law provisions.
If anyone brings a claim against us related to your actions, content or information on ElMawkaa, you will indemnify and hold us harmless from and against all damages, losses, and expenses of any kind (including reasonable legal fees and costs) related to such claim. Although we provide rules for user conduct, we do not control or direct users' actions on ElMawkaa and are not responsible for the content or information users transmit or share on ElMawkaa. We are not responsible for any offensive, inappropriate, obscene, unlawful or otherwise objectionable content or information you may encounter on ElMawkaa. We are not responsible for the conduct, whether online or offline, of any user of ElMawkaa.
WE TRY TO KEEP ElMawkaa UP, BUG-FREE, AND SAFE, BUT YOU USE IT AT YOUR OWN RISK. WE ARE PROVIDING ElMawkaa AS IS WITHOUT ANY EXPRESS OR IMPLIED WARRANTIES INCLUDING, BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT GUARANTEE THAT ElMawkaa WILL ALWAYS BE SAFE, SECURE OR ERROR-FREE OR THAT ElMawkaa WILL ALWAYS FUNCTION WITHOUT DISRUPTIONS, DELAYS OR IMPERFECTIONS. ElMawkaa IS NOT RESPONSIBLE FOR THE ACTIONS, CONTENT, INFORMATION, OR DATA OF THIRD PARTIES, AND YOU RELEASE US, OUR DIRECTORS, OFFICERS, EMPLOYEES, AND AGENTS FROM ANY CLAIMS AND DAMAGES, KNOWN AND UNKNOWN, ARISING OUT OF OR IN ANY WAY CONNECTED WITH ANY CLAIM YOU HAVE AGAINST ANY SUCH THIRD PARTIES. IF YOU ARE A CALIFORNIA RESIDENT, YOU WAIVE CALIFORNIA CIVIL CODE §1542, WHICH SAYS: A GENERAL RELEASE DOES NOT EXTEND TO CLAIMS WHICH THE CREDITOR DOES NOT KNOW OR SUSPECT TO EXIST IN HIS OR HER FAVOR AT THE TIME OF EXECUTING THE RELEASE, WHICH IF KNOWN BY HIM OR HER MUST HAVE MATERIALLY AFFECTED HIS OR HER SETTLEMENT WITH THE DEBTOR. WE WILL NOT BE LIABLE TO YOU FOR ANY LOST PROFITS OR OTHER CONSEQUENTIAL, SPECIAL, INDIRECT, OR INCIDENTAL DAMAGES ARISING OUT OF OR IN CONNECTION WITH THIS STATEMENT OR ElMawkaa, EVEN IF WE HAVE BEEN ADVISED OF THE POSSIBILITY OF SUCH DAMAGES. OUR AGGREGATE LIABILITY ARISING OUT OF THIS STATEMENT OR ElMawkaa WILL NOT EXCEED THE GREATER OF ONE HUNDRED DOLLARS ($100) OR THE AMOUNT YOU HAVE PAID US IN THE PAST TWELVE MONTHS. APPLICABLE LAW MAY NOT ALLOW THE LIMITATION OR EXCLUSION OF LIABILITY OR INCIDENTAL OR CONSEQUENTIAL DAMAGES, SO THE ABOVE LIMITATION OR EXCLUSION MAY NOT APPLY TO YOU. IN SUCH CASES, ElMawkaa'S LIABILITY WILL BE LIMITED TO THE FULLEST EXTENT PERMITTED BY APPLICABLE LAW.
</Text>
<Text style={firstParagraph}>
Governing Law
</Text>
<Text style={firstParagraph}>
This EULA agreement, and any dispute arising out of or in connection with this EULA agreement, shall be governed by and construed in accordance with the laws of Egypt.
 

				</Text>
				</ScrollView>
			</View>

			);
	}

}

const styles = { 
	container:{
		flex:1,
		backgroundColor:'white',
	    
	},
	firstParagraph:{
		paddingLeft:16,
		paddingRight:16,
		marginTop:16
	},
	title:{
		marginTop:10,
		fontWeight:'bold',
		fontSize:14,
	},
	viewStyle: {
	backgroundColor:'#F7F7F7',
	height: height*0.1,
	paddingTop: 15,
	shadowColor: '#000',
	shadowOffset: { width: 0, height: 2},
	shadowOpacity: 0.2,
	elevation: 2,
	position: 'relative',
	marginBottom:16,
	},
	back:{
	marginTop:10,
    marginLeft:18,
    marginRight:24,
  },
}