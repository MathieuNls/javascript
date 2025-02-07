import { BlockButton } from '../../common';
import { useOrganizationProfileContext } from '../../contexts';
import { Col, Flex, localizationKeys } from '../../customizables';
import { Header } from '../../elements';
import { useRouter } from '../../router';
import { DomainList } from './DomainList';
import { MembershipWidget } from './MembershipWidget';
import { RequestToJoinList } from './RequestToJoinList';

export const OrganizationMembersTabRequests = () => {
  const { navigate } = useRouter();
  //@ts-expect-error
  const { __unstable_manageBillingUrl } = useOrganizationProfileContext();

  return (
    <Col
      gap={8}
      sx={{
        width: '100%',
      }}
    >
      {__unstable_manageBillingUrl && <MembershipWidget />}
      <Col
        gap={2}
        sx={{
          width: '100%',
        }}
      >
        <Header.Root>
          <Header.Title
            localizationKey={localizationKeys(
              'organizationProfile.membersPage.requestsTab.autoSuggestions.headerTitle',
            )}
            textVariant='largeMedium'
          />
          <Header.Subtitle
            localizationKey={localizationKeys(
              'organizationProfile.membersPage.requestsTab.autoSuggestions.headerSubtitle',
            )}
            variant='regularRegular'
          />
        </Header.Root>
        <DomainList
          fallback={
            <BlockButton
              colorScheme='primary'
              textLocalizationKey={localizationKeys(
                'organizationProfile.membersPage.requestsTab.autoSuggestions.primaryButton',
              )}
              id='manageVerifiedDomains'
              onClick={() => navigate('organization-settings/domain')}
            />
          }
          redirectSubPath={'organization-settings/domain/'}
          verificationStatus={'verified'}
          enrollmentMode={'automatic_suggestion'}
        />
      </Col>

      <Flex
        direction='col'
        gap={4}
        sx={{
          width: '100%',
        }}
      >
        <Flex
          justify={'between'}
          align={'center'}
        >
          <Header.Root>
            <Header.Title
              localizationKey={localizationKeys('organizationProfile.membersPage.requestsTab.requests.headerTitle')}
              textVariant='largeMedium'
            />
            <Header.Subtitle
              localizationKey={localizationKeys('organizationProfile.membersPage.requestsTab.requests.headerSubtitle')}
              variant='regularRegular'
            />
          </Header.Root>
        </Flex>
        <RequestToJoinList />
      </Flex>
    </Col>
  );
};
