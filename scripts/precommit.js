import 'scripts/helpers/enforceFeatureBranchNaming';
import 'scripts/helpers/enforceGitFlowBranchesOnly';
import 'scripts/helpers/preventCommitToDevMaster';

throw new Error('precommit SUCCESS ');
